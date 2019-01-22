let randomNumber = Math.floor(Math.random() * 10 + 1);
var userInput = prompt('Guss the Number');
if (userInput == randomNumber) {
    document.write('<h1> ' + "You Guessed the correct number! : " + randomNumber  + '</h1>');
} else {
    document.write('<h1>' + "Thats not right" + '</h1>')
}