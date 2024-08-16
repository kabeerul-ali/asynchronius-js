//feach api
let url="https://cat-fact.herokuapp.com/facts";
var box=document.querySelector("#box");
let getdata=async ()=>{
    console.log("dta fetching.......!!!!!!!!!");
    let responce=await fetch(url);
    var data=await responce.json();
    len=data.length;
    for(let x=0;x<len;x++){
            box.innerText+=data[x].text+"\n";

    }
}
getdata();
