const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// DataBase Connection with MongoDB
mongoose.connect("mongodb+srv://onyxvail:Onyx2121@cluster0.ueuajkx.mongodb.net/e-commerce");

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Schema for creating products
const Product = mongoose.model("product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        required: true,
    },
});

// Route handler for fetching all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Route handler for adding a new product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
        date: req.body.date,
        available: req.body.available || true
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

// Route handler for removing a product
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Removed");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Starting the server
app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port: ' + port);
    } else {
        console.log('Error found: ' + error);
    }
});