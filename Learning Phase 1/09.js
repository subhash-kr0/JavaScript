// intro to array
// reference type

// creat array
var array = [1,2,3];
console.log(array);

// access array
console.log(array[0]);

// add to array
array[3] = 4;
console.log(array);

// array methods
// push
array.push(5);
console.log(array);

// pop
array.pop();
console.log(array);

// unshift
array.unshift(0);
console.log(array);

// shift
array.shift();
console.log(array);

// concat
var array2 = [6,7,8];
console.log(array.concat(array2));

// includes
console.log(array.includes(2));

// indexOf
console.log(array.indexOf(2));

// join
console.log(array.join("-"));

// reverse
console.log(array.reverse());

// slice
console.log(array.slice(1,3));

// splice
console.log(array.splice(1,2));
console.log(array);

// sort
console.log(array.sort());

// forEach
array.forEach(function(item, index) {
    console.log(item, index);
}
);

// isArray
console.log(Array.isArray(array));


// other way to create array
var array3 = new Array(1,2,3);
console.log(array3);

// array of objects
var array4 = [
    {name: "john", age: 25},
    {name: "jane", age: 30},
    {name: "jim", age: 35}
];
console.log(array4);

// array of arrays
var array5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(array5);
console.log(array5[0][0]);

// array of functions
var array6 = [
    function() {console.log("hello 1")},
    function() {console.log("hello 2")},
    function() {console.log("hello 3")}
];
console.log(array6);
array6[0]();
array6[1]();
array6[2]();

// array of functions that return values
var array7 = [
    function() {return "hello 1"},
    function() {return "hello 2"},
    function() {return "hello 3"}
];
console.log(array7);
console.log(array7[0]());
console.log(array7[1]());
console.log(array7[2]());
