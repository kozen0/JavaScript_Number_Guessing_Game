do {
  var randomNumber = Math.floor(Math.random() * 10 + 1);
  var userInput = prompt('Guss the Number between 1 and 10');
  if (userInput != randomNumber) {
      alert('thats not right');
  }
} while (userInput != randomNumber);
if (userInput == randomNumber) {
    document.write('<h1> ' + "You Guessed the correct number! : " + randomNumber  + '</h1>');
}