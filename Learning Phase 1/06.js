// if else statement

// if (condition) {
//     // code to run if condition is true
// } else {
//     // run some other code instead
// }

const age = 25;

if (age > 20) {
    console.log("you are over 20 years old");
}
else {
    console.log("you are under 20 years old");
}

let fn = "";

if (fn) {
    console.log("fn is defined");
}
else {
    console.log("fn is not defined");
}

// ternary operator (shorthand if statement)
// condition ? (runs if true) : (runs if false)

const age2 = 25;

age2 > 20 ? console.log("you are over 20 years old") : console.log("you are under 20 years old");

let age3 = 15;
let drink = age3 >= 18 ? "wine" : "water";
console.log(drink);

// switch statement
const day = "saturday";

switch (day) {
    case "monday":
        console.log("plan course structure");
        console.log("go to coding meetup");
        break;
    case "tuesday":
        console.log("prepare theory videos");
        break;
    case "wednesday":
          console.log("write code examples");
            break;
    case "thursday":
        console.log("write code examples");
        break;

    case "friday":
        console.log("record videos");
        break;
    case "saturday":
        console.log("its saturday");
        break;

    case "sunday":
        console.log("enjoy the weekend");
        break;
    default:
        console.log("not a valid day");
}