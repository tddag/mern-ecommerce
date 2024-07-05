import express from "express";
import { addProduct, getProducts, getProduct, checkoutProducts, updateProduct } from "../controllers/productController.js";
const router = express.Router();


// Add new product
router.post('/', addProduct)

// Get products
router.get('/', getProducts);

// Get product
router.get('/:id', getProduct)

// Update product
router.patch('/:id', updateProduct)

// checkout products
router.post('/checkout', checkoutProducts)

export default router;