const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://onyxvail:Onyx2121@cluster0.ueuajkx.mongodb.net/e-commerce");

// API Creation
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

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

const Product = mongoose.model("Product", productSchema);

// Creating API for adding products
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Product.find({});
        let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
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
        await product.save();
        console.log("Product added:", product);
        res.json({ success: true, product });
    } catch (error) {
        console.error('Error adding product:', error);
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

app.post('/login',async(req,res)=>{
    let user = await Users.find(findOne({email:req.body.email}));
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id,
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message:"Invalid Password"});
        }
    }
    else{
        res.json({success:false,message:"User not found"});
    }
})


app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port: ' + port);
    } else {
        console.log('Error found: ' + error);
    }
})