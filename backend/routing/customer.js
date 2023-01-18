const express = require('express');
const router = express.Router();
const Customer = require('../model/customerModel');
const db = require('mongoose');


db.connect('mongodb+srv://nghianguyen20:123@cluster0.nlqsde4.mongodb.net/CMS_SNAIL', {
    useNewUrlParser:true, useUnifiedTopology:true
}, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Successfully connected');
    }
});

router.get('/', (req, res) => {
    Customer.find({}, (err, customers) => {
        if (err) {
            res.send('something went really wrong!!');
            next();
        } 

        res.json(customers);
    })
});

module.exports = router;