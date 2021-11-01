
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

// chose a random color from the array
var randomChosenColour = buttonColours[nextSequence()];

// function generate a new random number between 0 and 3
function nextSequence(){
    var randonNumber = Math.floor(Math.random() * 3);
    return randonNumber;
};

nextSequence();

gamePattern.push(randomChosenColour);
console.log(gamePattern);





$("#" + randomChosenColour).on("click", function(){
    makeSound (randomChosenColour);
    $(this).fadeOut(100).fadeIn(100);
});


function handler (){
    $(".btn")
};

// .makeSound(randomChosenColour);

function makeSound (key) {
    switch(key){
        case "red": 
            var red = new Audio ("sounds/red.mp3");
            red.play();
            break; 
        case "blue": 
            var blue = new Audio ("sounds/blue.mp3");
            blue.play();
            break;
        case "green": 
            var green = new Audio ("sounds/green.mp3");
            green.play();
            break;
        case "yellow": 
            var yellow = new Audio ("sounds/yellow.mp3");
            yellow.play();
          break;
    };
};

