
// @desc Add new product
// @route POST /api/products
export const addProduct = async(req, res, next) => {
    const { name, price, category, color, size, images } = req.body;

    console.log(name, price, category, color, size)
    if (!name || !price || !category) {
        res.status(400).json({ message: "Missing required fields"})
        return
    }

    res.status(200).json({ message: "Successfully create a product"})
}
