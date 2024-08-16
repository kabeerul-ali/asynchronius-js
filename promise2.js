//
let work1=()=>{
    return new Promise((resolve,reject)=>{
        resolve("data 1");
    })
}
let work2=()=>{
    return new Promise((resolve,reject)=>{
        resolve("data 2");
    })
}
let x=work1();
let y=work2();
x.then((res)=>{
    console.log("feaching data 1......");
    setTimeout(()=>{
        console.log(res);
        y.then((res)=>{
            console.log("feaching data 2.....");
            setTimeout(() => {     
                console.log(res);                   
           }, 2000);    
        });    
    },2000);
})