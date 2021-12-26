// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded(
    { extended:true}
));

app.get("/", function(req,res){
    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString('en-US', options);

    if (currentDay === 6 || currentDay === 0 ){
            } else {
    }

    res.render('list', {kindOfday: day, NewListItems: items});
});


app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    console.log(items);
    res.redirect("/");
 
});


app.listen(3000, function(){
    console.log('Server is running on port 3000');
});