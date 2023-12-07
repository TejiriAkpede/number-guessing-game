// Develop a program that generates a random number between 1 and 100. Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct.

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  return randomNumber;
}

function getUserGuess(number) {
  const randomNumber = getRandomNumber();

  if (number > randomNumber) {
    return "Too high";
  } else if (number < randomNumber) {
    return "Too low";
  } else {
    return "Correct";
  }
}

console.log(getUserGuess(50));
