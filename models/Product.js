const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        description: {type: String, required: true,},
        img: {type: String, required: true},
        category: {type: String},
        price: {type: Number, required: true},
        inStock: {type: String, required: true},
        collectionName: {type: String, required: false},
        color: {type: String, required: false},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Product', ProductSchema);
