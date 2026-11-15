//CONDITIONAL statements
console.log("Conditional statements: If else statements");
let alertType = "simple";
if (alertType === "sweet") {
    console.log("This is a simple alert");
}
else if (alertType === "complex") {
    console.log("This is a complex alert");
}
else {
    console.log("This is an unknown alert");
}

//Switch statements
console.log("Conditional Statements:Switch statements");
alertType = "sweet";
switch (alertType) {
    case "simple":
        console.log("This is a simple alert");
        break;
    case "complex":
        console.log("This is a complex alert");
        break;
    default:
        console.log("This is an unknown alert");
}


//LOOPING statements - used to execute the repetitive or iterartive tasks
console.log("Looping statements: for loop");
for (let i = 0; i < 10; i++) {
    console.log("This is a for loop: " + i);
}

//for each loop
console.log("Looping statements: for each loop");
let arr = [1, 2, 3, 4, 5];
arr.forEach((value, index) => {
    console.log("This is a for each loop: " + value + " at index " + index);
});

//while loop(if not sure about the iterations)
console.log("Looping statements: while loop");
let j = 0;
while (j < 10) {
    console.log("This is a while loop: " + j);
    j++;
}   

//do while loop
console.log("Looping statements: do while loop");
let k = 10; 
do {
    console.log("This is a do while loop: " + k);
    k--;
}while (k > 0);

//JUMP statements