function abc(){
    console.log("hi i am abc function");

}
setTimeout(abc,2000);
console.log("abc function is write befor me and he not run before me due to setTimeout");
console.log("am print in befor of abc");