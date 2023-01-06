const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You have arrived at the seesion route.');
});

router.get('/active', (req, res) => {
    res.send(this.param);
    // Collection: Appointment
    // Return: An array of upcoming appointment (JSON obj) at the current day with active status.
});

router.get('/:customerName', (req, res) => {
    res.send(this.param.customerName);
    // Collection: Appointment
    // Return: An array of upcoming sesions of which customer name contains requested 'name.'
});

router.get('/:date/time', (req, res) => {
    res.send(this.param.customerName);
    // Collection: Appointment
    // Return: An array of available time slots within the given date.
});

router.post('/create', (req, res) => {
    // Collection: Customer
    // If customer does not exist add "new customer" into Customer collection. We add to Appointment collections regardless of new customer or not. Based on status.
    // Return: Confirmation (A String)
});

module.exports = router;