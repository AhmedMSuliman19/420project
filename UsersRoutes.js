// Import express into the file
const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UsersModel');


// POST route for creating product
router.post(
    '/register',
    (req, res)=>{
        // Capture the form data
        const formData = {
            fullName: req.body.fullName,
            ausId: req.body.ausId,
            age: req.body.age,
            mobileNo: req.body.mobileNo,
            email: req.body.email,
            password: req.body.password,
            date: req.body.date
        }

        // Instantiate the ProductsModel
        const newUsersModel = UsersModel(formData);
        newUsersModel.save();

        res.send('User has been saved!');
    }
);


// A GET route for fetching data from the 'orders' collection
router.get(
    '/',
    (req, res)=>{

        // (1) Fetch all the documents using .find()
        UsersModel.find()

        // (2) Once the results are ready, use .json() to send the results
        .then(
            (results) => {
                // res.json = res.send() + converts to JSON
                res.json({users: results})
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