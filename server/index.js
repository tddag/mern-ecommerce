import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to TD'server"})
})

// Database
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODBURL, {
    dbName: 'mernEcommerce'
})
mongoose.connection.on('connected', () => {
    console.log("Database connected")
})

const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})