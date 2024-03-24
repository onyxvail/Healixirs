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
mongoose.connect("mongodb+srv://onyxvail:Onyx2121@cluster0.ueuajkx.mongodb.net/e-commerce")

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename:(req,file,cb)=>{
             return cb(null,'${filename.fieldname}_${Date.now()}${path.extname(file.originalname)}')
    }
})

const upload = multer({storage:storage})

// Creating Endpoint for Image Upload

app.use('/images' , express.static('upload/images'))

app.post("/upload",upload.single(product),(req,res)=>{
    res.json({
        success:1,
        image_url:'http://localhost:${port}/images/${req.file.filename}'
    
    })
})




app.listen(port,(error)=>{
    if (!error){
        console.log('Server is running on port: '+port);
    }
    else
    {
        console.log('Error found: '+error);
    }
})