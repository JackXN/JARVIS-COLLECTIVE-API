const Product = require('../models/Product');
//! TOKEN STUFF LATER



const router = require('express').Router();


// CREATE A NEW PRODUCT
router.post('/', async (req,res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }catch (error) {
        res.status(500).json(error)
    }
});



module.exports = router;

