import express from "express";
import { addProduct } from "../controllers/productController.js";
const router = express.Router();


// Add new product
router.post('/', addProduct)

export default router;