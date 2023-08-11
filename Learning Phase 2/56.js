// important array methods

// 1. concat() - merge two or more arrays and returns a new array
// 2. join() - joins all elements of an array into a string
// 3. pop() - removes the last element from an array and returns that element
// 4. push() - adds one or more elements to the end of an array and returns the new length of the array
// 5. shift() - removes the first element from an array and returns that removed element
// 6. unshift() - adds one or more elements to the front of an array and returns the new length of the array
// 7. reverse() - reverses the order of the elements of an array - the first becomes the last, and the last becomes the first
// 8. slice() - extracts a section of an array and returns a new array
// 9. splice() - adds/removes elements from an array
// 10. sort() - sorts the elements of an array
// 11. indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
// 12. lastIndexOf() - returns the last index at which a given element can be found in the array, or -1 if it is not present
// 13. includes() - determines whether an array contains a certain element, returning true or false as appropriate
// 14. find() - returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found
// 15. findIndex() - returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found
// 16. filter() - creates a new array with all elements that pass the test implemented by the provided function
// 17. map() - creates a new array populated with the results of calling a provided function on every element in the calling array
// 18. reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// 19. some() - tests whether at least one element in the array passes the test implemented by the provided function
// 20. every() - tests whether all elements in the array pass the test implemented by the provided function
// 21. forEach() - executes a provided function once for each array element
// 22. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// 23. flatMap() - returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
// 24. from() - creates a new, shallow-copied Array instance from an array-like or iterable object
// 25. isArray() - determines whether the passed value is an Array
// 26. of() - creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
// 27. keys() - returns a new Array Iterator object that contains the keys for each index in the array
// 28. values() - returns a new Array Iterator object that contains the values for each index in the array
// 29. entries() - returns a new Array Iterator object that contains the key/value pairs for each index in the array
// 30. fill() - fills all the elements of an array from a start index to an end index with a static value
// 31. copyWithin() - shallow copies part of an array to another location in the same array and returns it without modifying its length 
// 32. includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate

const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }
