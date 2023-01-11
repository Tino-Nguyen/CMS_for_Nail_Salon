const express = require('express');
const app = express();

app.listen(4001);
// Mongoose, can create collections via Node.js

const sessionRouting = require('./routing/session');
const customerRouting = require('./routing/customer');
const serviceRouting = require('./routing/service');
const modalRouting = require('./routing/modal');

app.use('/session', sessionRouting);
app.use('/customer', customerRouting);
app.use('/service', serviceRouting);
app.use('/modal', modalRouting)

app.get('/', (req, res) => {
    res.send('You are now in the server side.');
});
