// jshint esversion:6

const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Hello");
    // console.log(request);
});

app.get("/contact", function(req, res){
    res.send("Contact Me at Sap@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Sapir and I like pizzza");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
