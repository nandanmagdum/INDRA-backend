const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json("Token absent");
        }

        // verify token
        const payload = await jwt.verify(token, process.env.JWT_KEY);
        if(!payload){
            return res.status(400).json("Token expired");
        }
        req.phone = payload.phone;
        next();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    authMiddleware
}