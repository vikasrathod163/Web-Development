// Getting attributes

let div = document.querySelector("div");

let attr = div.getAttribute("class");
console.log(attr);

let attr2 = div.getAttribute("name");
console.log(attr2);

let attr3 = div.getAttribute("id");
console.log(attr3);


// Setting attributes of the tags

let newD = div;
// newD.setAttribute("class","newClass");


// Setting new classes to the tag without replacing previous class
let cl = div.classList;
cl.add("newClass");
cl.add("anotherClass");

cl.remove("newClass");


// Adding new element

let el = document.createElement("i");
el.innerHTML = "Appended Element";

el.setAttribute("Style","color : red; background-color : yellow; padding : 5px;");


let el2 = document.createElement("i");
el2.innerHTML = "Prepended Element";

let el3 = document.createElement("i");
el3.innerHTML = "Before";

let el4 = document.createElement("i");
el4.innerHTML = "After";


let container = document.querySelector(".container");

container.append(el);
container.prepend(el2);
container.before(el3);
container.after(el4);


//el2.remove();