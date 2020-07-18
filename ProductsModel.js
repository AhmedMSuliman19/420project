// Import mongoose 
const mongoose = require('mongoose');

// Schema
const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
            required: true
        }
    }
);

// Model
const ProductsModel = mongoose.model('products', ProductsSchema);
module.exports = ProductsModel;