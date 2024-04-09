let marks = [23,53,64,36,77,56];
console.log(marks);

let total = 0;

for(let el of marks){
    total = total + el;
}

let avg = total/marks.length;

console.log("Total : ",total);
console.log("Average : ",avg);