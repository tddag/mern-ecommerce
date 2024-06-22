import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: String,
    size: String,
    images: [String]
}, {
    timestamps: true
})

export default mongoose.model("Product", productSchema)
