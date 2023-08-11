// default parameter

function addTwo(a,b){
    if(typeof b==='undefined'){
        b=0
    }
    return a+b
}

console.log(addTwo(4,5))
console.log(addTwo(4))
