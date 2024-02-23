// Loops

// For loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}


console.log("Next Version of for loop");
let j = 0;
for(;j < 5;){
    console.log(j);
    j++;
}

// For of Loop

let str = "vikas rathod";
console.log("Charecters");
for(let val of str){
    console.log(val);
}


// For in loop

let student = { // object
    nm : "vikas",
    rn : 4,
    marks : 223
}

for(let key in student){
    console.log(key);
    console.log("Key : ",key," Value : ",student[key]);
}


// While Loop

console.log("While Loop");

let k = 0;
while(k < 5){
    console.log(k);
    k++;
}

// Do While Loop

console.log("Do While Loop");


let l = 0;
do{
    console.log("Hello World!");
    l++;
}while(l <= 5);

