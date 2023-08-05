// function inside function

function myapp(){
    const myfunc = () => {
        console.log("Hello from myfunc")
    }

    const addTwo = (num1, num2) => {
        return num1+num2
    }

    const mulTwo = (num1, num2) => num1*num2;

    console.log("inside myfunc");
    myfunc();
    console.log(addTwo(2,3));
    console.log(mulTwo(2,3));
}

myapp();
