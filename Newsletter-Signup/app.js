// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// StaticFiles
app.use(express.static("public"));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded(
    {extended: true}
));

// HomeRouth
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    console.log(firstName, lastName, email); 
})




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

