
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
    userClickedPattern.push(userChosenColour);
    makeSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function() {
                nextSequence();
             }, 1000);
           }
        } else {  
            makeSound("wrong");

            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200)
            $("#level-title").text("Game Over, Press Any Key to Restart");

            startOver();
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
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    makeSound(randomChosenColour);
}

function makeSound (key) {
    var audio = new Audio ("sounds/" + key + ".mp3");
    audio.play();
}

function animatePress(currentColour){
        $("#" + currentColour).addClass("pressed");
        setTimeout(function () {
            $("#" + currentColour).removeClass("pressed");
          }, 100);        
}

function startOver(){
    started = false;        
    gamePattern = [];
    level = 0;
}

