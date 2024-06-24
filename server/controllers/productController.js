import Product from "../models/Product.js";

// @desc Add new product
// @route POST /api/products
export const addProduct = async (req, res, next) => {
    const { name, price, category, color, size, images } = req.body;

    console.log(name, price, category, color, size)
    console.log(req.body)
    if (!name || !price || !category) {
        res.status(400).json({ message: "Missing required fields"})
        return
    }

    const product = await Product.create({
        name,
        price,
        category,
        color,
        size,
        images
    })

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(400).json({ message: "Invalid Request"});
    }
}
