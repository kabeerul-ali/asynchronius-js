const url = "https://cat-fact.herokuapp.com/facts";
let btn = document.querySelector("#btn");
let msg = document.querySelector("#msg");
btn.style.backgroundColor = "blue";
const getFact = async () => {
  console.log("waiting for data.....");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  if (data.length > 0) {
    msg.innerText = data[0].text; // access the first element's text
  } else {
    msg.innerText = "No data available";
  }
};

btn.addEventListener("click", getFact);