// Import express into the file
const express = require('express');
const router = express.Router();
const OrdersModel = require('../models/OrdersModel');


// POST route for creating product
router.post(
    '/',
    (req, res)=>{
        // Capture the form data
        const formData = {
            productName: req.body.productName,
            quantity: req.body.quantity,
            cost: req.body.cost
        }

        // Instantiate the ProductsModel
        const newOrdersModel = OrdersModel(formData);
        newOrdersModel.save();

        res.send('Order has been saved!');
    }
);


// A GET route for fetching data from the 'orders' collection
router.get(
    '/',
    (req, res)=>{

        // (1) Fetch all the documents using .find()
        OrdersModel.find()

        // (2) Once the results are ready, use .json() to send the results
        .then(
            (results) => {
                // res.json = res.send() + converts to JSON
                res.json({orders: results})
            }
        )
        .catch( 
            (e)=> {
                console.log('error occured', e)
            }
        );

    }
);

// Export the router
module.exports = router;