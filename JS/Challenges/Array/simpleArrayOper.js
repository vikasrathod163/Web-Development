let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log("Companies : ",companies);

// removing first company form the array

companies.shift();
console.log("After removing first el : ",companies);

// remove uber and add ola in its place

companies.splice(2,1,"Ola");

console.log("After replacing uber by ola : ",companies);

// add amezon at end

companies.push("Amazon");
console.log("After adding amazon at the end of the array : ",companies);