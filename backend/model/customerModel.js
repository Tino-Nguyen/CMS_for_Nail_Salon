const mongoose = require('mongoose');

const customerSchema = {
    name: String,
    phone: String,
    rewardPoint: Number
}

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;