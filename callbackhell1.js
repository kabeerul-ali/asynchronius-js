function data(data,newfun){
    //set time out
    setTimeout(()=>{
        console.log("datid:",data);
        if(newfun){
            newfun();
        }
    },2000);
}
data(1,()=>{
    data(2,()=>{
        data(3,()=>{
            data(4);
        });
    });
});