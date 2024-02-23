// string

let str = "vikas rathod";

console.log(str);

console.log("length of string : ",str.length);


let str2 = "vikas\t rathod";

console.log(str2);
console.log(str2.length);

let myName = "vikas";
let rollNo = 22;
let marks = 233;

console.log("my name is",myName,", roll no is",rollNo,"and marks are",marks);


// template literals

let specialString = `my name is ${myName} , roll no is ${rollNo} and marks are ${marks}`;
console.log(specialString);


let exp = `addition of ${3} and ${5} is : ${3+5}`;
console.log(exp);

// methods

console.log("methods");

let mystr = 'Vikas Rathod';

console.log("Original String : ",mystr);

console.log("in upper case : ",mystr.toUpperCase());
console.log("in lower case : ",mystr.toLowerCase());


let newStr = "             vikas     rathod                 ";
console.log(newStr);

let trimmed = newStr.trim();

console.log("Printing original string : ",newStr);
console.log("Printing trimmed string : ",trimmed);


let str3 = "VikasRathod";
console.log(str3.slice(0,3));
console.log(str3.slice(2,6));
console.log(str3.slice(2,6));



let str4 = ' is a boy';


let sample = str3+str4;
console.log(sample);

let sample2 = str3.concat(str4);

console.log("Concatenated String : ",sample2);

console.log("Charecter At : ",0," - ",sample2[0]);

console.log(sample2.charAt(5));

let replaced = sample2.replace('a','A');
console.log(replaced);

replaced = sample2.replace('R','X');
console.log(replaced);





