import Product from "../models/Product.js";
import stripeLib from "stripe"
const stripe = stripeLib("sk_test_51PXZnPLdRXO21zGPcxfbmYs5g31JGPsdGVYlFNvlhfRJve4R4s95eCmVFz4TuvbbWx0w8vATSB6Rw4mqHoWn2FYe00NyoD11qV")

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

// @desc check out products
// @route POST /api/products/checkout
export const checkoutProducts = async (req, res, next) => {
    const { products } = req.body;

    if (!products) {
        res.status(400).json({ message: "Invalid Request"})
        return
    }

    const FRONT_END_URL = "http://localhost:5173/checkout"

    let stripeProductPayload = products.map(product => ({
        price_data: {
            currency: "cad",
            product_data: {
                name: product.name,
                images: product.images
            },
            tax_behavior: "inclusive",
            unit_amount: product.price * 100
        },
        quantity: product.qty
    }))

    // let payload2 = [
    //     {
    //       "price_data": {
    //         "currency": "cad",
    //         "product_data": {
    //           "name": "Shirt",
    //           "images": [
    //             "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/0b51f07a-5dd3-40c8-86d5-ea9fa4187525?alt=media",
    //             "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/4070658b-85a6-4a40-9803-8c0696da6f83?alt=media",
    //             "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/af891257-57b9-4a53-a8c6-7dbadf0ff346?alt=media"
    //           ]
    //         },
    //         "tax_behavior": "inclusive",
    //         "unit_amount": 10000
    //       },
    //       "quantity": 1
    //     },
    //     {
    //       "price_data": {
    //         "currency": "cad",
    //         "product_data": {
    //           "name": "Pant",
    //           "images": [
    //             "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/9b2a0c55-80ce-4044-8a41-37f82d48a84b?alt=media",
    //             "https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-6169d.appspot.com/o/65a703ea-4aa8-49d2-a1d5-937284466f93?alt=media"
    //           ]
    //         },
    //         "tax_behavior": "inclusive",
    //         "unit_amount": 20000
    //       },
    //       "quantity": 1
    //     }
    //   ]


    const stripeSession = await stripe.checkout.sessions.create({
        customer_email: 'customer@example.com',
        line_items: stripeProductPayload,
        mode: 'payment',
        success_url: `${FRONT_END_URL}/?success=true`,
        cancel_url: `${FRONT_END_URL}/?canceled=true`
    })

    res.status(200).json({ url: stripeSession.url })
    // res.redirect(303, stripeSession.url)
}