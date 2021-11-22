//jshint esversion:6

const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const imageURL = weatherData.weather[0].icon;


            res.write("<p> The weather is currently "  + weatherDescription + "</p>");
            res.write("<h1> The temperture in Israel is " + temp +  " degrees Celicius </h1>");
            res.write("<img src = http://openweathermap.org/img/wn/" + imageURL + "@2x.png>");
            res.send();
   
        })
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000");
})
