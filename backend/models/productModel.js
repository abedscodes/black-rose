import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: { type: Array, required:true},
    colour: { type: Array, required:false},
    category: {type: String, required: true},
    brand: {type: String, required: true},
    name: {type: String, required: true},
    popularItem: {type: Boolean},
    date: {type: Number, required: true}

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema)

export default productModel