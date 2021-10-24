
var name1 = prompt ("What is your name?");
var name2 = prompt ("What is your partner's name? ");
var n = Math.random();
n = n * 100 ;
n = Math.floor (n) + 1;
if (n > 70){
  alert ("You and your spouse have " + n + "% match. In your case - two are better than one.");
}
else{
  alert ("You and your spouse have " + n + "% match.");
}
