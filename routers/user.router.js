const express = require("express");
const { getUserInfo } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", getUserInfo);

module.exports = userRouter;