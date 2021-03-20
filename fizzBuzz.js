let answer = parseInt(prompt("Enter a number, fizzy dizzy: "));

for (let i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzDizz");
    } else if (answer % 3 === 0) {
        console.log("Fizz");
    } else if (answer % 5 === 0) { 
        console.log("Dizz");
    } else {
        console.log(i);
    }
}

console.log("hey");