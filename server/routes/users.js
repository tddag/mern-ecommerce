import express from "express";
import { registerUser } from "../controllers/userController.js";
const router = express.Router();

// Register new user
router.post("/", registerUser)

export default router;