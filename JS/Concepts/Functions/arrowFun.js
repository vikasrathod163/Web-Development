console.log("Arrow function");

let a = 5;
let b = 3;


const sum = (a,b) => {
    console.log("Sum is : ",a+b);
    return a+b;
}

let addition = sum(a,b);
console.log("outside function : ",addition);



// testing updatation inside function
let n = 10;

const update = (n) => {
    n = n + 100;
    console.log("inside function : ",n);
}

update(n);
console.log("outside function : ",n);

// testing on array

let ar1 = [2,4,5];
console.log("before update : ",ar1);

const uArr = (arr) => {
    arr[0] = 100;
    console.log("Array insede function : ",arr);
}
uArr(ar1);

console.log("After execution of function : ",ar1);

