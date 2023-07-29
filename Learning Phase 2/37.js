// difference between dot and bracket notation

// dot notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
// var entreeValue = testObj.an entree; // this will throw an error
// var drinkValue = testObj.the drink;  // this will also throw an error


// bracket notation
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
