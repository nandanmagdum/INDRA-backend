const axios = require("axios");
const { response } = require("express");

const apiUrl = "https://indra-backend-cxg7.onrender.com/";

const fertilizer_url = "https://fertilizer-prediction-skoz.onrender.com/fertilizer-predict";

const postData = {
    crop: 'rice',
    N : 30,
    P: 23,
    K: 28
  };

const apiCall = () => {
    axios.post(fertilizer_url, postData).then((res) => {
        console.log(res.data);
    })
    axios.get(apiUrl)
    .then((res) => {
        console.log(res.status);
        console.log(res.body);
        console.log("Server kept active by self call");
        setTimeout(apiCall, 1000*60*10);
    })
    .catch((err) => {
        console.error(`Error calling the api ${err.message}`);
        setTimeout(apiCall, 1000*60*10);
    });
}

module.exports = {apiCall};
