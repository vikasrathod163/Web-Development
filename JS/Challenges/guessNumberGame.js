let gameNumber = 22;

let num = prompt("Guess the number");

while(!(num == gameNumber)){
    num = prompt("Guess Again!");
}

console.log("Right Guess!");