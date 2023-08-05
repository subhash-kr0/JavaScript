// Lexical scope

const myVar = "value1";

function myApp(){

    function myFunc(){
        console.log("inside myFunc", myVar);
     // const myVar = "value59";
     const myFunc2 = () =>{
        console.log("inside myFunc", myVar);
    }
    myFunc2(); 
}
   console.log("inside myApp", myVar);
    myFunc();
}

myApp();