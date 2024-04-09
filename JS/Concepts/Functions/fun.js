console.log("Welcome to functions");


// function without parameter and return value
function printMsg(){
    console.log("Message!");
}

printMsg(); // function call
printMsg();
printMsg();

// function with parameter but without return value

function count(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}

count(50);

// function with para and return value

function sum(a,b){
    let sum = a + b;
    return sum;
}
let ans = sum(2,8);
console.log("sum of 2 and 8 is : ",ans);

// function with array

let arr = [2,5,4,7,5,8];

function sumOfArr(array){
    let sum = 0;
    for(let el of array){
        sum = sum + el;  // sum+=el;
    }
    return sum;
}

console.log("Sum of Array is : ",sumOfArr(arr));
