// template strings

let age = 30;

const name = 'John';

console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`My name is ${name} and I am ${age} years old.`.length);
console.log(`My name is ${name} and I am ${age} years old.`.toUpperCase());
console.log(`My name is ${name} and I am ${age} years old.`.toLowerCase());
console.log(`My name is ${name} and I am ${age} years old.`.substring(0, 2));
console.log(`My name is ${name} and I am ${age} years old.`.split(''));

// Undefined

let test;
console.log(test);
console.log(typeof test);
test = 'Hello';
console.log(typeof test,test);

// Null

let test1 = null;
console.log(test1);
console.log(typeof test1);

// bigint

let num = 10n;
console.log(num);
console.log(typeof num);

let num1 = BigInt
console.log(num1);
console.log(typeof num1);

// Symbol

const sym = Symbol();
console.log(sym);
console.log(typeof sym);
