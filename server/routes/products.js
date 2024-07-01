import express from "express";
import { addProduct, getProducts, getProduct, checkoutProducts } from "../controllers/productController.js";
const router = express.Router();


// Add new product
router.post('/', addProduct)

// Get products
router.get('/', getProducts);

// Get product
router.get('/:id', getProduct)

// checkout products
router.post('/checkout', checkoutProducts)

export default router;