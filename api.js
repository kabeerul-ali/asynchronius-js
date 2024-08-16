const url="https://cat-fact.herokuapp.com/facts";
const abc=
((async ()=>{
    console.log("waiting for data.....");
    let reponce=await fetch(url);
    console.log(reponce);
}))();