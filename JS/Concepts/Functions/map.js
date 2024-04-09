// map function

let marks = [54,85,86,98,75,78];
console.log(marks);


let callBackFunc = (values,index,arr) => {
    values = values - 10;
    return values;
}


let afterMap = marks.map(
    callBackFunc
);

console.log(afterMap);

let arr = [2,5,4,2];
console.log(arr);

let afterMap2 = arr.map(
    (values,index,array) => {
        return values * 2;
    }
);

console.log(afterMap2);

