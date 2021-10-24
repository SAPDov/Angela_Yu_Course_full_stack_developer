var numberBeer = 99;

function beer() {

  while (numberBeer >= 0) {
    if (numberBeer > 1) {
      var phrase = numberBeer + " bottles of beer on the wall, " + numberBeer +
        " bottles of beer. Take one down and pass it around," + (numberBeer - 1) + " bottles of beer on the wall.";
      console.log(phrase);

    } else if (numberBeer === 1) {
      var phrase = numberBeer + "bottles of beer on the wall, " + numberBeer +
        "bottles of beer. Take one down and pass it around, No more bottles of beer on the wall.";
      console.log(phrase);
    } else {
      var phrase = "No more bottles of beer on the wall, no more bottles of beer. Go to
      the store and buy some more, 99 bottles of beer on the wall.
      ";
      console.log(phrase);
    }
    numberBeer--;
  }
}

beer();
