//jshint esversion:6

const express = require('express');

const app = express();

app.use(express.urlencoded(
    {extended: true}
));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var results = num1 + num2;

    res.send("The results of the calculator are " + results);
});

app.post("/bmicalculator/", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
  
    res.send("Your BMI is " + bmi.toFixed(2));
});

app.listen(3000, function(){
    console.log("Server is on port 3000");
});

