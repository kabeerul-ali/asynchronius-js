function printHello(){
    console.log("Hello Ninjas!");
}

function printMessage(){
    console.log("I'm a pro coder!")
}

function helper(callback){

    // Calling the callback() function
    callback();
}

// First call
helper(printHello);

// Second call
helper(printMessage);