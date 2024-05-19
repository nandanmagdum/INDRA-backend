const express = require("express");
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    video_id: {type: String, required: true},
    instructions: {type: String, required: false}
}, {timestamps: true});

const videoModel = mongoose.model('videos', videoSchema);

module.exports = videoModel;