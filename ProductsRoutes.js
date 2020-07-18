// Import express into the file
const express = require('express');
const router = express.Router();
const ProductsModel = require('../models/ProductsModel');


// POST route for creating product
router.post(
    '/',
    (req, res)=>{
        // Capture the form data
        const formData = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image
        }

        // Instantiate the ProductsModel
        const newProductsModel = ProductsModel(formData);
        newProductsModel.save();

        res.send('Product has been saved!');
    }
);


// A GET route for fetching data from the 'feeds' collection
router.get(
    '/',
    (req, res)=>{

        // (1) Fetch all the documents using .find()
        ProductsModel.find()

        // (2) Once the results are ready, use .json() to send the results
        .then(
            (results) => {
                // res.json = res.send() + converts to JSON
                res.json({products: results})
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