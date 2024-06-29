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

// @desc Get products
// @route GET /api/products
export const getProducts = async (req, res, next) => {

    try {
        const products = await Product.find();

        if (products) {
            res.status(200).json(products)
        } else {
            res.status(200).json([]);
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: e})
    }

}


// @desc Get product
// @route GET /api/products/id
export const getProduct = async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        res.status(400).json({ message: "Invalid Request"})
        return
    }

    const product = await Product.findById(id)
    if (product) {
        res.status(200).json(product)
    } else {
        res.status(400).json({ message: "No product found!"})
    }


}