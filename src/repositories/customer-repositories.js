'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
  
exports.authenticate = async(data) => {
    const res = await Customer
        .findOne({
            email: data.email,
            password: data.password});
    return res;     
};

exports.create = async(data) => {

    let customer = new Customer(data);
    await customer.save();        
};