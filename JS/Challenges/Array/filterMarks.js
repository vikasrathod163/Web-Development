// filter marks

let marks = [84,88,93,99,91,64,73,70];
console.log(marks);

let filtered = marks.filter(
    (values) => {
        return values >= 90;
    }
)

console.log(filtered)