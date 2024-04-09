let boxes = document.getElementsByClassName("box");

let idx = 1;
for(let box of boxes){
    box.innerText = `item No - ${idx++}`;
}