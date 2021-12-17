// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// HomeRouth
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res){
    req.body.
})

// StaticFiles
app.use(express.static("public"));


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

