
var names = ["Ali", "Sili", "Jon", "Shila", "Hen"];


function whoPaying (names){
    var numberOfPeople = names.length;
    var randomNumPosition = Math.floor((Math.random() * numberOfPeople));
    var randomPerson = names[randomNumPosition];
return randomPerson + " is going to buy lunch today!";

}
console.log (whoPaying(names));
