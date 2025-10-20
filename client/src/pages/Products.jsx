// import React, { useContext, useState, useEffect } from 'react'
// import { assets } from '../assets/assets';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import ProductCard from '../components/ProductCard';

// const Products = () => {

//     const { products, search, showSearch } = useContext(ShopContext);
//     const [showFilter, setShowFilter] = useState(false);
//     const [filterProducts, setFilterProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [brand, setBrand] = useState([]);
//     const [sortType, setSortType] = useState("relevance");

//     const toggleCategory = (e) => {
//         if (category.includes(e.target.value)) {
//           setCategory((prev) => prev.filter((item) => item !== e.target.value));
//         } else {
//           setCategory((prev) => [...prev, e.target.value]);
//         }
//       };

//     const toggleBrand = (e) => {
//         if (brand.includes(e.target.value)) {
//           setBrand((prev) => prev.filter((item) => item !== e.target.value));
//         } else {
//           setBrand((prev) => [...prev, e.target.value]);
//         }
//       };
    
//     const applyFilter = () => {
//         let productsCopy = products.slice();

//         if (showSearch && search) {
//             productsCopy = productsCopy.filter((item) =>
//             item.name.toLowerCase().includes(search.toLowerCase())
//             );
//         }

//         if (category.length > 0) {
//             productsCopy = productsCopy.filter((item) =>
//             category.includes(item.category)
//             );
//         }

//         if (brand.length > 0) {
//             productsCopy = productsCopy.filter((item) =>
//             brand.includes(item.brand)
//             );
//         }

//         setFilterProducts(productsCopy);
//     };

//     const sortProduct = () => {
//     let fpCopy = filterProducts.slice();
//     switch (sortType) {
//         case "low-high":
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//         case "high-low":
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//         default:
//         applyFilter();
//         break;
//     }
//     };

//     useEffect(() => {
//     applyFilter();
//     }, [products, category, brand, search, showSearch]);

//     useEffect(() => {
//         sortProduct();
//     }, [sortType]);

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t  px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
//         {/* Filter Options */}
//         <div className='min-w-60'>
//             <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//             <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//             </p>
//             {/* Categories */}

//             <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block` }>
//                 <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//                 <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Camera'} onChange={toggleCategory} /> Camera
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Drone'} onChange={toggleCategory} /> Drone
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Action Camera'} onChange={toggleCategory} /> Action Camera
//                     </p>
//                 </div>
//             </div>

//             <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block` }>
//                 <p className='mb-3 text-sm font-medium'>BRAND</p>
//                 <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Canon'} onChange={toggleBrand} /> Canon
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Dji'} onChange={toggleBrand} /> Dji
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Fujifilm'} onChange={toggleBrand} /> Fujifilm
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'GoPro'} onChange={toggleBrand} /> GoPro
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Leica'} onChange={toggleBrand} /> Leica
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Nikon'} onChange={toggleBrand} /> Nikon
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Olympus'} onChange={toggleBrand} /> Olympus
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Panasonic'} onChange={toggleBrand} /> Panasonic
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Sony'} onChange={toggleBrand} /> Sony
//                     </p>
//                     <p className='flex gap-2'>
//                         <input className='w-3' type="checkbox" value={'Other'} onChange={toggleBrand} /> Other
//                     </p>
//                 </div>

                

//             </div>
//         </div>
//         {/* Products */}
//         <div className='flex-1'>
//             <div className='flex justify-between text-base sm:text-2xl ml-4 mb-3'>
//             <Title text1={"ALL"} text2={"PRODUCTS"} />

//             {/* Product Sort */}
//             <select
//                 onChange={(e) => setSortType(e.target.value)}
//                 className="border-2 border-gray-300 text-sm px-2"
//             >
//                 <option value="relevant">Sort by: Relevance</option>
//                 <option value="low-high">Sort by: Price Low to High</option>
//                 <option value="high-low">Sort by: Price High to Low</option>
//             </select>
//             </div>

//             {/* Map Products */}
//             <div className="grid grid-cols-2 ml-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
//              {filterProducts.map((item, index) => (
//             <ProductCard
//               key={index}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//             ))}
//         </div>
//         </div>

//     </div>
//   )
// }

// export default Products


import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const { products, search, showSearch, brandFilter } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState(brandFilter);
    const [sortType, setSortType] = useState("relevance");

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };

    const toggleBrand = (e) => {
        if (brand.includes(e.target.value)) {
            setBrand((prev) => prev.filter((item) => item !== e.target.value));
        } else {
            setBrand((prev) => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                category.includes(item.category)
            );
        }

        if (brand.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                brand.includes(item.brand)
            );
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();
        switch (sortType) {
            case "low-high":
                setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
                break;
            case "high-low":
                setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();
    }, [products, category, brand, search, showSearch]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t  px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
                </p>
                {/* Categories */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Camera'} onChange={toggleCategory} /> Camera
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Drone'} onChange={toggleCategory} /> Drone
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Action Camera'} onChange={toggleCategory} /> Action Camera
                        </p>
                    </div>
                </div>

                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>BRAND</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Canon'} onChange={toggleBrand} /> Canon
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Dji'} onChange={toggleBrand} /> Dji
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Fujifilm'} onChange={toggleBrand} /> Fujifilm
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'GoPro'} onChange={toggleBrand} /> GoPro
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Leica'} onChange={toggleBrand} /> Leica
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Nikon'} onChange={toggleBrand} /> Nikon
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Olympus'} onChange={toggleBrand} /> Olympus
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Panasonic'} onChange={toggleBrand} /> Panasonic
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Sony'} onChange={toggleBrand} /> Sony
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type="checkbox" value={'Other'} onChange={toggleBrand} /> Other
                        </p>
                    </div>
                </div>
            </div>
            {/* Products */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl ml-4 mb-3'>
                    <Title text1={"ALL"} text2={"PRODUCTS"} />

                    {/* Product Sort */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                    >
                        <option value="relevant">Sort by: Relevance</option>
                        <option value="low-high">Sort by: Price Low to High</option>
                        <option value="high-low">Sort by: Price High to Low</option>
                    </select>
                </div>

                {/* Map Products */}
                <div className="grid grid-cols-2 ml-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item, index) => (
                        <ProductCard
                            key={index}
                            name={item.name}
                            id={item._id}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;