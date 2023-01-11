const express = require('express');
const router = express.Router();

router.put('/checkout', (req, res) => {
    // Collections: Appointments
    res.send('Return: Confirmation string');
});

router.put('/reschedule', (req, res) => {
    // Collections: Appointments
    res.send('Return: Confirmation string');
});

module.exports = router;