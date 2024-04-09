let n = prompt("Enter any number : ");

let arr = [];

for(let i = 1; i <= n; i++){
    arr.push(i);
}
console.log(arr);


let sum = arr.reduce(
    (res,val) => {
        return res + val;
    }
)

console.log(sum);

let product = arr.reduce(
    (res,val) => {
        return res * val;
    }
)

console.log(product)