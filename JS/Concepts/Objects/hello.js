let student = {
    name : "vikas",
    rollNo : 23,
    div : "b",
    marks : {
        s1 : 24,
        s2 : 23,
        s3 : 45
    }
}

console.log(student);
console.log("name : ",student.name);
console.log('marks of subject 2 : ',student.marks.s2);

console.log('marks of subject 2 : ',student['marks']['s2']);

for(let el in student){
    console.log(el);
}

for(let el in student){
    console.log(student[el]);
}