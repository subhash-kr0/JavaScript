// rest parameter

function myFunc(a,b,...c){
   console.log(`a: ${a}`)
    console.log(`b: ${b}`)
    console.log(`c: ${c}`)
}

myFunc(1,2,3,4,5,6,7,8,9,10)

function addAll(...nums){
    let sum=0
    for(let num of nums){
        sum+=num
    }
    return sum
}

console.log(addAll(1,2,3,4,5,6,7,8,9,10))