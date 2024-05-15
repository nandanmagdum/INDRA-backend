const { authMiddleware } = require("../middlewares/auth.middleware.js");
const authRouter = require("./auth.router.js");
const userRouter = require("./user.router.js");

const express  = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json("Server is live");
});

router.use("/auth", authRouter);
router.use("/user", authMiddleware , userRouter);

module.exports = router;