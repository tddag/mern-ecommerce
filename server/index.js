import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js"
import productRoutes from "./routes/products.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// Database
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODBURL, {
    dbName: 'mernEcommerce'
})
mongoose.connection.on('connected', () => {
    console.log("Database connected")
})

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes);

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})