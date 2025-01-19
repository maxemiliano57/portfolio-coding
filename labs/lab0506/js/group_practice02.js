//Daniel Krupczak & Max Rivera
var number = 5;
var guess = 0;
var counter = 0;

do {
    guess = parseInt(prompt("I am thinking of a number between 1 and 10, pick one!"), 10);

    if (guess > number) {
        console.log("Your guess is too high.");
    } else if (guess < number) {
        console.log("Your guess is too low.");
    }

    counter++;
    console.log("counter =", counter);

} while (guess != 5);

console.log("Looks like you guessed right, the number was 5.");
console.log("Number of guesses =", counter);
