// promise chain as a call back hell
function data(data){
    //set time out
    return new Promise((res,rej)=>{
        console.log("feachingdata ...",data);
        setTimeout(()=>{
        res("data:",data);
        },200);
    });
}
data(1).then((res)=>{
    console.log(res);
}).data(2).then((res)=>{
    console.log(res);
}).data(3).then((res)=>{
    console.log(res);
}).data(4).then((res)=>{
    console.log(res);
}).data(5).then((res)=>{
    console.log("succes",res);
});