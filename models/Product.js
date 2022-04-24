const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        description: {type: String, required: true,},
        img: {type: String, required: true},
        category: {type: Array},
        price: {type: Number, required: true},
        inStock: {type: Boolean, required: true},
        collection: {type: String, required: false},
        color: {type: String, required: false},
    },
    {timestamps: true}
)

module.exports = mongoose.model('Product', ProductSchema);
