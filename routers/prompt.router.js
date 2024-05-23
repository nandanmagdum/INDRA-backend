const express = require("express");
const { addPromptController, getAllPromptsController } = require("../controllers/prompt.controller");

const promptRouter = express.Router();

// add prompt
promptRouter.post("/", addPromptController);

// get all prompts
promptRouter.get("/", getAllPromptsController);

module.exports = promptRouter;