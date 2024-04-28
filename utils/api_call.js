const axios = require("axios");

const apiUrl = "https://indra-backend.onrender.com/";

const apiCall = () => {
    axios.get(apiUrl)
    .then((res) => {
        console.log(res.status);
        console.log(res.body);
        console.log("Server kept active by self call");
        setTimeout(apiCall, 1000*60*10);
    })
    .catch((err) => {
        console.error("Error calling the api");
        setTimeout(apiCall, 1000*60*10);
    });
}

module.exports = {apiCall};
