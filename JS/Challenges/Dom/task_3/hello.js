let body = document.querySelector("body");

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
newBtn.style.padding = "5px";
newBtn.style.cursor = "pointer";

body.prepend(newBtn);