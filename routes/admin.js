const express = require('express');
const admin = require('../middleware/admin');
const Product = require('../models/product');
const adminRoute = express.Router();


// Add Product
adminRoute.post('/admin/add-product', admin, async (req, res) => { 

    try {
        const { name, description, quantity, images, category, price } = req.body;
        let product = new Product(
            {
                 name, description, images, quantity, price, category
            }
        );
        product = await product.save();
        res.json(product);
        
    //     'name': name,
    //   'description': description,
    //   'quantity': quantity,
    //   'images': images,
    //   'category': category,
    //   'price': price,
    //   'id': id,
    //   'userId': userId
        
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
        
    }
})