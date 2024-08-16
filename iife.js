//iife is a function whish uto call
//await
function api(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("weather data");
            res("weather ");
        }, 2000);
    })
}
(async function getdata(){  
    console.log("first call");
    await api();
    console.log("secound call");
    await api();
})();
