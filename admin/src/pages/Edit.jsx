import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = ({token}) => {
  const { productId } = useParams()
  const navigate = useNavigate()

  // States for images and product details
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Camera')
  const [brand, setBrand] = useState('Other')
  const [popularItem, setPopularItem] = useState(false)
  const [sizes, setSizes] = useState([])

  useEffect(() => {
    // Fetch the product details to pre-fill the form
    const fetchProductDetails = async () => {
      try {
        const response = await axios.post(backendUrl + '/api/product/single', { productId }, { headers: { token } })
        if (response.data.success) {
          const product = response.data.product
          setName(product.name)
          setDescription(product.description)
          setPrice(product.price)
          setCategory(product.category)
          setBrand(product.brand)
          setPopularItem(product.popularItem)
          setSizes(product.sizes || [])
          // Set images
          setImage1(product.image[0])
          setImage2(product.image[1])
          setImage3(product.image[2])
          setImage4(product.image[3])
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }

    fetchProductDetails()
  }, [productId, token])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('category', category)
      formData.append('brand', brand)
      formData.append('popularItem', popularItem)
      formData.append('sizes', JSON.stringify(sizes))

      image1 && formData.append('image1', image1)
      image2 && formData.append('image2', image2)
      image3 && formData.append('image3', image3)
      image4 && formData.append('image4', image4)

      const response = await axios.put(`${backendUrl}/api/product/edit/${productId}`, formData, { headers: { token } });
      

      if (response.data.success) {
        toast.success(response.data.message)
        navigate('/list')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2 '>Upload Image</p>
        <div className='flex gap-2'>
            <label htmlFor="image1">
            <img className='w-20' 
                src={image1 && typeof image1 !== 'string' ? URL.createObjectURL(image1) : image1 || assets.upload_area} 
                alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
            <img className='w-20' 
                src={image2 && typeof image2 !== 'string' ? URL.createObjectURL(image2) : image2 || assets.upload_area} 
                alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
            <img className='w-20' 
                src={image3 && typeof image3 !== 'string' ? URL.createObjectURL(image3) : image3 || assets.upload_area} 
                alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
            <img className='w-20' 
                src={image4 && typeof image4 !== 'string' ? URL.createObjectURL(image4) : image4 || assets.upload_area} 
                alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>

        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' placeholder='Type description' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value="Camera">Camera</option>
            <option value="Drone">Drone</option>
            <option value="Action Camera">Action Camera</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Brand</p>
          <select onChange={(e) => setBrand(e.target.value)} value={brand} className='w-full px-3 py-2'>
            <option value="Canon">Canon</option>
            <option value="Dji">Dji</option>
            <option value="Fujifilm">Fujifilm</option>
            <option value="GoPro">GoPro</option>
            <option value="Leica">Leica</option>
            <option value="Nikon">Nikon</option>
            <option value="Olympus">Olympus</option>
            <option value="Panasonic">Panasonic</option>
            <option value="Sony">Sony</option>
          </select>
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Price</p>
        <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" />
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setPopularItem(prev => !prev)} checked={popularItem} type="checkbox" id="popularItem" />
        <label className='cursor-pointer' htmlFor="popularItem">Add to Popular Items</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>Update</button>
    </form>
  )
}

export default Edit
