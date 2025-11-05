import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function to add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, brand, sizes, colour, popularItem } = req.body

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            brand,
            popularItem: popularItem === "true" ? true : false,
            sizes: JSON.parse(sizes),
            // colour: JSON.parse(colour),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({ success: true, message: "Product Added" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}


//function to list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true,products})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }
}

// function to edit a product
const editProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand, sizes, popularItem } = req.body;
    const productId = req.params.id;

    // Find the product by its ID
    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // Collect existing images if new ones aren't uploaded
    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    // Process image upload
    let imagesUrl = product.image;  // retain existing images if no new image is provided
    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
          return result.secure_url;
        })
      );
    }

    // Update product details
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.sizes = JSON.parse(sizes) || product.sizes;
    product.popularItem = popularItem === "true" ? true : false;
    product.image = imagesUrl;
    product.date = Date.now();

    // Save updated product
    await product.save();

    res.json({ success: true, message: "Product Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//function to remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
        
    }

}

//function to view single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Search products
const searchProducts = async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.json({ success: true, products: [] });
    }

    const products = await productModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { brand: { $regex: query, $options: "i" } }
      ]
    });

    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export { listProducts, addProduct, removeProduct, singleProduct, editProduct, searchProducts }