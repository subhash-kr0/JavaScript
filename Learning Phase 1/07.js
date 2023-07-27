// and or operators

console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);
console.log(!(1 == 1));
console.log(!(10 > 5));

// nested if else statements

let winninNumber = 10;
let guess = +prompt("guess a number between 1 and 10");     // + converts string to number
                                                            // prompt returns a string so we need to convert it to a number

if (guess == winninNumber) {
    console.log("you guessed correctly");
}
else if (guess < winninNumber) {
    console.log("too low");
}
else {
    console.log("too high");
}

// if else if else statement

let age = 25;

if (age > 20) {
    console.log("you are over 20 years old");
}
else if (age > 10) {
    console.log("you are over 10 years old");
}
else {
    console.log("you are under 10 years old");
}
