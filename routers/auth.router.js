const express = require("express");
const userController = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/create", userController.createUserController);
authRouter.post("/check", userController.checkIfUserExists);

module.exports = authRouter;