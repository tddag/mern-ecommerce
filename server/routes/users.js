import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
const router = express.Router();

// Register new user
router.post("/", registerUser)

// login user
router.post("/login", loginUser)

export default router;