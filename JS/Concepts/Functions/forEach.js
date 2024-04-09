// forEach function


let arr = ["nashik","dhule","mumbai","pune"];
console.log(arr);

let arr2 = [];

arr.forEach(
    (values) => {
        arr2.push(values.toUpperCase());
    }
);

console.log(arr2);

arr.forEach(
    (values,index) => {
        console.log("index : ",index," || Value : ",values);
    }
)

console.log("\n");

arr.forEach(
    (values,index,array) => {
        console.log(values.toUpperCase());
        console.log(index);
        // console.log(array[index]);
        console.log(array);
    }
);

