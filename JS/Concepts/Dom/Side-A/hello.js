// document model

console.log(window.document);
window.console.dir(window.document);
console.log(window.document.body);
console.dir(document.body);

// changing css with javaScript

let el = document.body.children[0];
el.style.color = "blue";


// Selectors in JavaScript

// id selector
let el2 = document.getElementById("para1");
el2.style.color = 'green';

let h1 = document.getElementById("one");
h1.style.color = "green";

let newH = document.getElementById("newHeading");
//newH.innerText = "NEW TEXT";
newH.innerHTML = "<i>Italic</i>";

// query selector
let headings = document.querySelector("h1"); // selecting tag using it
headings.style.backgroundColor = "grey";

let fdiv = document.querySelector(".first-div");  // selecting class
fdiv.style.opacity = "0.2";


let sec1 = document.querySelector(".sec"); 
sec1.style.border = "2px solid grey";
sec1.style.padding = "5px";


let one = document.querySelector("#one"); // selecting id
one.style.color = "red";

let o = document.querySelector("#one").innerHTML;
console.log(o);

// class selector

let container = document.getElementsByClassName("container"); //selecting class
container[0].innerHTML = "<button> New Button </button>";

let items = document.getElementsByClassName("items");
items[1].innerText = "New";
items[0].style.color = "red";

items[3].style.border = "2px solid red";

// using for loop

for(let item of items){
    item.style.backgroundColor = "Yellow";
}



// tag selector

let para = document.getElementsByTagName("p");
para[1].style.color = "green";
para[2].style.color = "red";
para[3].innerText = "New inner text";

// function for click

function changeClr(){
    //console.log("Working........");
    let element = document.getElementById("para1");
    element.style.color = "red";
};


