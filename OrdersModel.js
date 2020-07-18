// Import mongoose 
const mongoose = require('mongoose');

// Schema
const OrdersSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        },
        cost: {
            type: Number,
            required: true
        }
    }
);

// Model
const OrdersModel = mongoose.model('orders', OrdersSchema);
module.exports = OrdersModel;