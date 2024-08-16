
// let promise=new Promise((resolve,reject)=>{  //resolve and resect
//     console.log("hi i am romise");
//     reject("hi i am succcess");
// });
// console.log("hi it is promise condition:",promise)

let promise= new Promise((res,rej)=>{
    setTimeout(() => {
        console.log("promise  is executed");
        res("hi i am promice ");
        
    }, 6000);
    
});