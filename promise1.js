//
const pro=()=>{
    return new Promise((res,rej)=>{
        console.log("not enter");
        rej("ohhh nooo!");
        res("yess");
        // res("yes it is success");    
        });
};
let promise=pro();
promise.catch(()=>{
    console.log("sorry!");
});

promise.then((err)=>{  //err print res value
    console.log();
});
