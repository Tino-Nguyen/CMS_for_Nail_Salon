const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Collections: Services
    res.send('Return: An array of service objects.');
});

module.exports = router;