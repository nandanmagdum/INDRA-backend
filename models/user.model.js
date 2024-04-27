const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    uuid: {type: String, required: true},
    address : {
        street: {type: String},
        village_city: {type: String},
        taluka: {type: String, required: true},
        district: {type: String, required: true},
        zip: {type: Number, required: true},
        state: {type: String, required: true}
    }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;