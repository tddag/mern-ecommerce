
// @desc Register User

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

// @route POST /api/users/
export const registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ message: "Please add required fields"})
        return
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400).json({ message: "User already exists"})
        return
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: 'Admin'
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateJwtToken(user._id),
            role: user.role
        })
    } else {
        res.status(400).json({ message: "Invalid User Data"})
    }
}

const generateJwtToken = (id) => {
    return jwt.sign(
        {id},
        process.env.JWT_PRIVATE_KEY,
        {
            expiresIn: '30d'
        }
    )
}