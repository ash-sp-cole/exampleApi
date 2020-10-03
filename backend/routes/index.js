var express = require('express');
var router = express.Router();
const axios = require("axios");
require('dotenv').config();
// I am using AXIOS , it is an api requester its easy to use . so above i install it with require



// our api call here uses a (get) and after the url api:city      the :city is a special code that says anything we enter in our html form (index.html) after our inital /api , we will take as a variable
// so for example api/banana would allow us to access the variable "banana" . In this case we are using it to access a variable we called city as defined below . using  ' : '  before a url makes it accessible as weve done with the word city

router.get('/api:city', function(req, res){


        let city = req.params.city // here I am telling the function we want a variable called city and it is required

        let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+process.env.API_KEY;   // here is the api request url , you can see that we have a space to add the variable city, in your project it would be to add the URL
    

        // like FETCH we are using axios to handle out api call , it says do a get and use the URL mentioned above , complete with the city that we chose

        axios({
            method:'get',
            url,
           
        })
        .then(function (response) {
            res.send(JSON.stringify(response.data));
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    
    });

module.exports = router;  // here we are exporting the function so that our server can use it ( remember where we included it in the top . now going to /api+city  will trigger this call