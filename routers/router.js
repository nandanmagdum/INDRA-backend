const authRouter = require("./auth.router");

const express  = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    return res.status(200).json("Server is live");
});

router.use("/auth", authRouter);

module.exports = router;