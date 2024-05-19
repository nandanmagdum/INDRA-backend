const express = require("express");
const videoController = require("../controllers/video.controller.js");

const videoRouter = express.Router();

videoRouter.post("/", videoController.addNewVideoController);
videoRouter.get("/all", videoController.getAllVideoInfoController);
videoRouter.get("/:video_id", videoController.getVideoController);

module.exports = videoRouter;