//Arithmetic Operators
console.log("Arithmetic Operators");
let x = 5;
let y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); //Quotient
console.log(x % y); //reminder

//Assignment Operators
console.log("Assignment Operators");
let a = 10;
console.log(a); //10
a += 5;
console.log(a); //15

let b = 20;
console.log(b); //20
b -= 5;
console.log(b); //15

b *= 2;
console.log(b); //30
b /= 2;
console.log(b); //15 

console.log(b % a); //15 % 15 = 0

//Comparison Operators(>,<,>=,<=,==,!= then return type is boolean)
console.log("Comparison Operators");
let c = 10;
let d = 20;
console.log(c == d); // false
console.log(c != d); // true
console.log(c < d); // true
console.log(c > d); // false
console.log(c <= d); // true
console.log(c >= d); // false

//Strict equality
console.log(1==='1'); // false(compares both datatypes and values)
console.log(null===undefined); // false

//Loose equality(Type conversion takes place which is called coercion)
console.log(1=='1'); // true
console.log(null==undefined); // true
console.log(a!==b); // true

//logical Operators(And, Or, Not)
console.log("Logical Operators");
let e = 10;
let f = 20;
console.log(e>f && f>e); // false
console.log(e>f || f>e); // true
console.log(!(e>f || f>e)); // false
console.log(!(e>f)); // true

//Unary Operators(++, --, typeof, delete)
console.log("Unary Operators");
//Post increment
let g = 5;
console.log(g++); // 5
console.log(g); // 6

let h = 10;
console.log(h--); // 10
console.log(h); // 9

//pre increment
let i = 15;
console.log(++i); // 16
let j = 20;
console.log(--j); // 19