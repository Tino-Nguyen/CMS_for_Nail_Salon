const express = require('express');
const app = express();

app.listen(4001);

const sessionRouting = require('./routing/session');
const customerRouting = require('./routing/customer');
const serviceRouting = require('./routing/service');

app.use('/session', sessionRouting);
app.use('/customer', customerRouting);
app.use('/serviceRouting', serviceRouting);

app.get('/', (req, res) => {
    res.send('You are now in the server side.');
});