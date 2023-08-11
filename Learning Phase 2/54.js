// callback function

function myFun(name){
    console.log("inside myFun");
    console.log(name);
}

function fun2(callback){
    console.log("inside fun2");
    callback("harshit");
}

fun2(myFun);