let btn2 = document.querySelector("#btn2");

btn2.onclick = () => {
    console.log("First Handler...");
}

// overrided method
btn2.onclick = () => {
    console.log("Second Handler...");
}

//to avoid override problem we use event Listeners
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click",() =>{
    console.log("Handler one");
    alert("Handler One!");
});

btn3.addEventListener("click",() =>{
    console.log("Handler Two");
    alert("Handler Two!");
});

let btn1 = document.querySelector("#btn");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log("Client X : ",evt.clientX);
    console.log("Client Y : ",evt.clientY);
}

let btn4 = document.querySelector("#btn4");
btn4.ondblclick = () =>{
    console.log("Button 3 - Clicked 2x");
}

let box = document.querySelector(".container");

box.addEventListener("mouseover",() =>{
    box.style.backgroundColor = "green";
    console.log("Insede Div...");
});

box.addEventListener("mouseout",() =>{
    box.style.backgroundColor = "blueviolet";
    console.log("Out of Div...");
});


// Button Five

let btn5 = document.querySelector("#btn5");

const func2 = () => {
    console.log("*** Button Clicked with function two ***");
}

const func = () => {
    console.log("*** Button Clicked ***");
    func2();
}



btn5.addEventListener("click",func);

// Removing event listeners

btn5.removeEventListener("click",func);

// Events - click,dblclick,mouseover,mouseout,keypress,keyup,keydown etc.