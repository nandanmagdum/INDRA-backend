
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers/router");
require("dotenv").config();
const apiCall = require("./utils/api_call.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

// routers
app.use("/", router);


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT ,() => {
        console.log(`Server is listening at port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error.message);
})

apiCall.apiCall();
