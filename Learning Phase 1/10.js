// primitive vs reference data type

// primitive types
// 1. number
// 2. string
// 3. boolean
// 4. undefined
// 5. null
// 6. BigInt
// 7. Symbol

let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);


// reference types
// 1. array
// 2. object
// 3. function

// array
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// object
let obj1 = {
    name: "harshit",
    age: 22
}
let obj2 = obj1;
console.log("obj1", obj1);
console.log("obj2", obj2);
obj1.age = 23;
console.log("after incrementing obj1");
console.log("obj1", obj1);
console.log("obj2", obj2);

// function