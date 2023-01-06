const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Collections: Customer
    res.send('Return: All customer data to be stored in the frontend.');
});

module.exports = router;