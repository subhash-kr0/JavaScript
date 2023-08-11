// para destructuring

const person = {
    name: "human",
    gender: "male",
    age: 22
}

function printDetails(obj){
    console.log(obj.name);
    console.log(obj.gender);
    console.log(obj.age);
}

printDetails(person);

function p2({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

p2(person)