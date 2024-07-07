const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);

mongoose.connect
("mongodb+srv://dineshmuniraj:Ueoy7t1EgaO0uO4j@cluster0.q8hqzkk.mongodb.net/nodeapi?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    });
    console.log("Connected to database!")})
.catch(()=>{console.log("Connection Failed!")})