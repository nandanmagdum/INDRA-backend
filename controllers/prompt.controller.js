const express = require("express");
const userModel  = require("../models/user.model.js");

const addPromptController = async(req, res) => {
   try {
    const data = req.body;
    const updateUser = await userModel.findOneAndUpdate(
        {uuid: req.uuid},
        {
            $push : {
                prompts: {
                    prompt: data.prompt,
                    answer : data.answer
                }
            }   
        },
        {new: true}
    );
    if(!updateUser){
        return res.status(400).json("Error adding prompt to user");
    }
    return res.status(200).json(updateUser.prompts);
   } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
   }
}

const getAllPromptsController = async(req, res) => {
    const userId = req.uuid;
    try {
        const user = await userModel.findOne({uuid: userId});
        if(!user){
            return res.status(400).json("Error getting the user");
        }
        return res.status(200).json(user.prompts);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(error.message);
    }
}



module.exports = {
    addPromptController,
    getAllPromptsController
}