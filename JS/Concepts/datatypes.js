// Datatypes
// Number , String , Boolean , Object , null , undefined




let a = 5;
console.log(typeof a);

let nm = "vikas";
console.log(typeof nm);

let bl = true;
console.log(typeof bl);


let b = 3.3;
console.log(typeof b);

let nl = null;
console.log(typeof nl);

let ud = undefined;
console.log(typeof ud);


let data = {myName : "vikas" , age : 21 , marks : 234};
console.log(data);
console.log(typeof data);

console.log(data.myName);
console.log(data["myName"]);

console.log(data.age);


let data2 = {myName : "nitin" , marks : { m1 : 23 , m2 : 34 , m3 : 53}};

console.log(data2);

console.log(data2.marks.m3);
console.log(data2["marks"]["m1"]);

console.log(typeof data2.marks);
console.log(typeof data2.marks.m2)