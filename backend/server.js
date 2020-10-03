const express = require("express");
var bodyParser = require('body-parser')
const app = express();
var cors = require('cors')


const apiRoute = require("./routes/index.js");  // this is where we import the api call (route) so that app.use(apiroutes) can find it later on this page :)



// this is stuff to help the app run and handle the json response
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

//port for server
const PORT = 3000



// this is the connection between running the SERVER and our ROUTE that we set up in the route folder
app.use(apiRoute);


app.listen(PORT, ()=>{

    console.log("Your server is now running on port => " , PORT , " enjoy ...")

})