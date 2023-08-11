// function returnning a function

function myfun(){
    function hello(){
        console.log("hello in hello");
    }
    return hello;
}

var fun = myfun();
fun();