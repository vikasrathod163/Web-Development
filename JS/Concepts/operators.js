// console.log("Operators");

// // Arithmetic Operator +,-,*,/, %

// let a = 5;
// let b = 2;

// console.log("a + b : ",a+b);
// console.log("a - b : ",a-b);
// console.log("a * b : ",a*b);
// console.log("a / b : ",a/b);
// console.log("a % b : ",a%b);

// console.log("a power b : ",a**b);

// // Unery Operator

// let num = 5;
// console.log("num = ",num);
// console.log("num++ = ",num++);
// console.log("num = ",num);

// console.log("--num = ",--num);
// console.log(" a = ",a);

// console.log("a-- = ",a--);

// console.log("a = ",a);

// console.log("b = ",b);
// console.log("++b = ",++b);


// // += -= /= *= %=

// let age = 23;

// age+=5; // age = age + 5;

// console.log("Age : ",age);

// age /= 2; // age = age / 2;

// console.log("Age : ",age);

// age -= 4; // age = age - 4;

// console.log("Age : ",age);

// age *= 3;   // age = age * 3;

// console.log("Age : ",age);

// age+= 2;

// age %= 3;   // age = age % 3

// console.log("Age : ",age);

// // Relational 


// let n1 = 12;
// let n2 = 3;

// console.log("n1 = ",n1," n2 = ",n2);
// console.log("n1 == n2 : ",n1 == n2);

// n2 = 12;
// console.log("n1 = ",n1," n2 = ",n2);
// console.log("n1 == n2 : ",n1 == n2);

// {
//     let n1 = 5;
//     let n2 = "5";
//     console.log("n1 = ",n1," n2 = ",n2);
//     console.log("n1 == n2 : ",n1 == n2);

//     console.log("n1 = ",n1," n2 = ",n2);
//     console.log("n1 === n2 : ",n1 === n2);

//     n2 = 3;
//     console.log("n1 = ",n1," n2 = ",n2);
//     console.log("n1 != n2 : ",n1 != n2);

//     n2 = "5";
//     console.log("n1 = ",n1," n2 = ",n2);
//     console.log("n1 !== n2 : ",n1 !== n2);
// }

// if(n1 > n2){
//     console.log("n1 is greater than n2.");
// }

// console.log();

// console.log(n1 < n2);
// console.log(n1 > n2);

// console.log();

// console.log("n1 = ",n1," n2 = ",n2);
// console.log("n1>=n2 : ",n1 >= n2);

// n2+=9;
// console.log("n1 = ",n1," n2 = ",n2);

// console.log("n2 <= n1 : ",n2 <= n1);


// Logical Operator

let aa = 5;
let bb = 6;
console.log("aa = ",aa," bb = ",bb);
console.log("aa == 5 && bb == 6 : ",aa == 5 && bb == 6);
console.log("aa == 5 && bb == 5 : ",aa == 5 && bb == 5);

console.log("aa == 5 && bb == 6 : ",aa == 5 || bb == 6);
console.log("aa == 5 && bb == 5 : ",aa == 5 || bb == 5);
console.log("aa == 3 && bb == 8 : ",aa == 3 || bb == 8);

console.log(!(aa == 3));
console.log();


// Bitwise Operator
/*

aa = 5 - 101
bb = 6 - 110
         ---
         100
*/

console.log("AND");
console.log(aa&bb);

/*

aa = 5 - 101
bb = 6 - 110
         ---
         111
*/

console.log("OR");
console.log(aa|bb);



/*

aa = 5 - 101
         ---
         010

*/
console.log("Compliment")
console.log(~aa);
/*

aa = 5 - 101
bb = 6 - 110
         ---
         011
*/

console.log("XOR");
console.log(aa^bb);







