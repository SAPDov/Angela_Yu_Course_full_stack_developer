
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keydown(function(event){
    if(!started) {
        $("#level-title").text("Level " + level);
        console.log("level is "+ level);
        nextSequence();   
        started = true;
    } 
});

$(".btn").click(function (){

    var userChosenColour = $(this).attr("id");
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    makeSound(userChosenColour);
    animatePress(userChosenColour);

    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){

    // console.log(userClickedPattern.length);
    // console.log(gamePattern.length);

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            console.log("success");

            setTimeout(function() {
                nextSequence();
             }, 1000);
           }
        } else {  
        setTimeout(function () {
           $("#level-title").text("You are wrong");
          }, 100); 
            console.log("wrong");
            started = false;        
            $("#level-title").text("Press A key to Start"); 
        }          
    }

// function generate a new random number between 0 and 3
function nextSequence(){    
    userClickedPattern = [];
    level ++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
// chose a random color from the array
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern); 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    makeSound(randomChosenColour);
}

function makeSound (key) {
    var audio = new Audio ("sounds/" + key + ".mp3");
    // audio.muted = true;
    audio.play();
}

function animatePress(currentColour){
        $("#" + currentColour).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
          }, 100);        
}



