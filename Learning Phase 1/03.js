// typeof operator

// data types (primitive data types)
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigint

let name = 'John Doe';
console.log(name);
console.log(typeof name);

let age = 30;
console.log(age);
console.log(typeof age);

// convert number to string
let val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

age = 20;
console.log(typeof (age + ""));

// convert string to number

let val1 = Number('5');
console.log(val1);
console.log(typeof val1);
console.log(val1.toFixed(2));

let val4 = +"5";
console.log(val4);
console.log(typeof val4);

// convert boolean to number

let val2 = Number(true);
console.log(val2);
console.log(typeof val2);

// convert boolean to string

let val3 = String(true);
console.log(val3);
console.log(typeof val3);
