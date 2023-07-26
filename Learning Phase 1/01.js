console.log('01.js');
console.log("01.js");
console.log(`01.js`);

// This is comment

// Variable
// var, let, const
// var is global scope
// let is local scope
// const is local scope

var name1 = 'John Doe';
console.log(name1);

let name2 = 'John Doe';
console.log(name2);

const name3 = 'John Doe';
console.log(name3); 

"use strict"; // strict mode

console.log(3 + + "3"); // 6
console.log(3 + "3"); // 33
console.log(3 + +"3"); // 6
console.log(3 + -"3"); // 0
console.log(3 - "3"); // 0
console.log(3 * "3"); // 9
console.log(3 / "3"); // 1
console.log(3 % "3"); // 0
console.log(3 ** "3"); // 27

console.log(3 + 3 + "3"); // 63
console.log(3 + "3" + 3); // 333
console.log("3" + 3 + 3); // 333
console.log("3" + (3 + 3)); // 36
