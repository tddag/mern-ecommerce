import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js"

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

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})