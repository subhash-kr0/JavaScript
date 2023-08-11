// map method

const numbers = [4,2,5,8];

const square = function(number){
    return number*number
}

const squareArray = numbers.map(square)
console.log(squareArray)

const sq = numbers.map((number) => number*number)
console.log(sq)

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);