const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://onyxvail:Onyx2121@cluster0.ueuajkx.mongodb.net/e-commerce");

// CHAPA API key
const CHAPA_AUTH_KEY = 'CHAPUBK_TEST-1mIlG71s309YSmupbs17lHpbFvLdZBCE';

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage: storage });

// Creating Endpoint for Image Upload
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for products
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, required: true, default: true }
});

// Define the product model
const Product = mongoose.model('Product', productSchema);

// CHAPA API Endpoint for initiating transaction
const CHAPA_API_URL = 'https://chapa.com/api/transaction/initiate';

// Creating API for initiating payment with CHAPA
app.post('/api/payment', async (req, res) => {
    try {
        // Construct the request body for CHAPA API
        const body = {
            amount: req.body.amount,
            currency: req.body.currency,
            tx_ref: req.body.tx_ref,
            return_url: req.body.return_url,
        };

        // Set up headers for CHAPA API request
        const headers = {
            headers: {
                Authorization: `Bearer ${CHAPA_AUTH_KEY}`,
                "Content-Type": "application/json",
            },
        };

        // Make a POST request to CHAPA API
        const response = await axios.post(CHAPA_API_URL, body, headers);
        
        // Get the checkout URL from the CHAPA API response
        const checkoutUrl = response.data.data.checkout_url;

        // Send the checkout URL back to the frontend
        res.json({ success: true, checkoutUrl });
    } catch (error) {
        console.error('Error initiating payment:', error);
        res.status(500).json({ success: false, error: "Error initiating payment" });
    }
});


// Creating API for adding products
app.post('/addproduct', async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            available: req.body.available || true
        });
        await product.save();
        console.log("Product added:", product);
        res.json({ success: true, product });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});


// Creating API for getting products by category
app.get('/api/products', async (req, res) => {
    try {
        const category = req.query.category; // Get the category from the query parameters
        let products;

        if (category) {
            // If category is provided, filter products by category
            products = await Product.find({ category: category });
        } else {
            // If no category is provided, fetch all products
            products = await Product.find({});
        }

        console.log("Products Fetched:", products);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});


// Creating API for deleting products
app.post('/removeproduct', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log("Product removed");
        res.json({ success: true });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Creating API for getting all products
app.get('/api/products', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All Products Fetched");
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Schema creating for user model 

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Creating Endpoint for registering the user
app.post('/signup', async (req, res) => {
    console.log("Received signup request with body:", req.body);

    try {
        // Check if the email already exists
        let existingUser = await Users.findOne({ email: req.body.email });
        if (existingUser) {
            console.log("Email already exists:", req.body.email);
            return res.status(400).json({ success: false, error: "Email already exists" });
        }

        // Create a cart object for the new user
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create a new user instance
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });

        // Save the new user to the database
        await newUser.save();

        console.log("User saved:", newUser);

        // Generate JWT token for the new user
        const tokenData = {
            user: {
                id: newUser.id,
            }
        };
        const token = jwt.sign(tokenData, 'secret_ecom');
        console.log("Token generated:", token);

        // Return success response with token
        res.status(201).json({ success: true, token });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Creating Endpoint for user login

app.post('/login', async (req, res) => {
    try {
        // Find user by email
        const user = await Users.findOne({ email: req.body.email });
        
        if (user) {
            // Compare passwords
            const passCompare = req.body.password === user.password;
            
            if (passCompare) {
                // Generate JWT token for the user
                const tokenData = {
                    user: {
                        id: user.id,
                    }
                };
                const token = jwt.sign(tokenData, 'secret_ecom');
                res.json({ success: true, token });
            } else {
                res.status(401).json({ success: false, message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ success: false, message: "User not found" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the e-commerce API'); 
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port: ' + port);
    } else {
        console.log('Error found: ' + error);
    }
});
