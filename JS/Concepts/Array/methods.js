// Methods

let arr = [2,3,53,67,76,85];
console.log(arr);

arr.push(555);

console.log("After push : ",arr);

arr.push(222,333,5);
console.log("After multiple push : ",arr);

arr.pop();
console.log("After pop : ",arr);


console.log("Array : ",arr);

let str = arr.toString();
console.log("Converted String : ",str);


// concat

let ar1 = [2,3,5,3,2];
let ar2 = [6,5,3,8,32,22];
console.log("Array one : ",ar1);
console.log("Array two : ",ar2);

let ar3 = ar1.concat(ar2);
console.log("Concatinated array : ",ar3);

// shift and unshift

console.log("unShift methods");

console.log("Array : ",arr); 
arr.unshift(5555);
console.log("After unShift : ",arr);
arr.shift(10001);
console.log("After shift : ",arr);

// slice and splice

let slicedArr = arr.slice(0,3);
console.log("Sliced array from index 0 to 3 ",slicedArr);

let slicedArr2 = arr.slice(2,3);
console.log("Sliced array from index 2 to 3 ",slicedArr2);

console.log("Array : ",arr);

let spl = arr.splice(4,2,);
console.log("Spliced elements : ",spl);



console.log("original array : ",arr);

arr.splice(5,1,999);

console.log("Array : ",arr); 


