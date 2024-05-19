const express = require("express");
const mongoose = require("mongoose");
const videoModel = require("../models/video.model");

const getAllVideoInfoController = async(req, res) => {
    try {
        const allData = await videoModel.find();
        if(!allData){
            return res.status(400).json("Error getting all videos data");
        }
        return res.status(200).json(allData);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

const getVideoController = async(req, res) => {
    const video_id = req.params.video_id;
    try {
        const videoData = await videoModel.findOne({video_id: video_id});
        if(!videoData){
            return res.status(400).json("Error fetching the video data");
        }
        return res.status(200).json(videoData);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

const addNewVideoController = async(req, res) => {
    const data = req.body;
    try {
        const newVideo = await videoModel.create(data);
        if(!newVideo){
            return res.status(400).json("Error adding new video");
        }
        return res.status(200).json(newVideo);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message);
    }
}

module.exports = {
    getAllVideoInfoController,
    addNewVideoController,
    getVideoController
}