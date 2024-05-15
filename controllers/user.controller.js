const express = require("express");
const mongoose = require("mongoose");
const userModel = require("../models/user.model.js");

const getUserInfo = async(req, res) => {
    const phone = req.phone;
    try {
        const user = await userModel.findOne({phone: phone});
        if(!user){
            return res.status(400).json("User not found");
        }
        return res.status(200).json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            street: user.address.street,
            village_city : user.address.village_city,
            taluka : user.address.taluka,
            district: user.address.district,
            zip : user.address.zip,
            state : user.address.state
        });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    getUserInfo
}