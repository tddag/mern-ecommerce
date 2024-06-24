import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
const router = express.Router();


// Add new product
router.post('/', addProduct)

// Get products
router.get('/', getProducts);

export default router;