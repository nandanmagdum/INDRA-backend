const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const createUserController = async(req, res) => {
    const data = req.body;
    try {
        const user = await userModel.create(data);
        if(!user){
            return res.status(400).json("Error creating new user");
        }
        const token = await jwt.sign(
            {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            uuid: user.uuid,
            address: {
                street: user.address.street,
                village_city : user.address.village_city,
                taluka: user.address.taluka,
                district : user.address.district,
                zip: user.address.zip,
                state : user.address.state
            }
        }
        , process.env.JWT_KEY, {expiresIn: '30d'});

        if(!token){
            return res.status(400).json("error creating jwt token");
        }
        //return in response
        return res.status(200).json(token);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

const checkIfUserExists = async(req, res) => {
    const {uuid} = req.body;
    try {
        const user = await userModel.findOne({uuid: uuid});
        if(!user){
            return res.status(200).json(null);
        }
        // create json web token
        const token = await jwt.sign(
            {
            name: user.name,
            phone: user.phone,
            uuid: user.uuid,
            address: {
                street: user.address.street,
                village_city : user.address.village_city,
                taluka: user.address.taluka,
                district : user.address.district,
                zip: user.address.zip,
                state : user.address.state
            }
        }
        , process.env.JWT_KEY, {expiresIn: '30d'});

        if(!token){
            return res.status(400).json("error creating jwt token");
        }
        //return in response
        return res.status(200).json(token);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    createUserController,
    checkIfUserExists
}
