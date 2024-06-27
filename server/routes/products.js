import express from "express";
import { addProduct, getProducts, getProduct } from "../controllers/productController.js";
const router = express.Router();


// Add new product
router.post('/', addProduct)

// Get products
router.get('/', getProducts);

// Get product
router.get('/:id', getProduct)

export default router;