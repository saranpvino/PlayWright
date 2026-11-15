//String Literal
let str1 = "Hello, World!";
let str2 = 'Hello, World!';
let str3 = `Hello`;
//str1 and str2 will have same memory location and str3 will have different memory location
console.log(str1 === str2); // true because comparing memory location
console.log(str1 == str3); // false because comparing values

//String Object(new memory location will be created for each new String object)
let str4 = new String("Hello, World!");
//comparing literal and object will return false because they have different memory locations
console.log(str1 === str4); // false because comparing memory location
console.log(str1 === str4.toString()); // true because converting str4 to string and comparing values

console.log(str1 == str4); // true because comparing values

//length is property to find the length of string
console.log(str1.length); // 13
//index is property to find the index of string
console.log(str1.indexOf("World")); // 7

//escape sequence characters
let str5 = "\t Hello, \n \"World\"!\n";
console.log(str5); // Hello, 
// "World"!

//concat(), "+", ${} -> template literals are used to concatenate strings
let str6 = "Hi";
let str7 = "World";
console.log(str6.concat(", ", str7, "!"));  
console.log(str6 + ", " + str7 + "!");
console.log(`${str6}, ${str7}!`); //note template literals inside backticks(``) and ${} is used to insert variables inside string

//charAt() is used to find the character at a specific index
console.log(str1.charAt(7)); // W

//indexOf() is used to find the index of a specific character or substring
console.log(str1.indexOf("World")); // 7
console.log(str1.indexOf("Hello")); // 0
console.log(str1.indexOf("xyz")); // -1 (not found)

//substring() is used to extract a substring from a string
console.log("String Substring");
console.log(str1.substring(5)); // , World!
console.log(str1.substring(0, 5)); // Hello(5th char ll be omitted so end index is optional in this method)
console.log(str1.substring(7, 12)); // World(12th char will be omitted so end index is optional in this method)
console.log(str1.substring(-2, 5)); //-2 will be converted to 0 so output will be Hello(5th char ll be omitted so end index is optional in this method)

//slice() is used to extract a substring from a string
console.log("String Slice");
console.log(str1.slice(0, 5)); // Hello(5th char ll be omitted so end index is optional in this method)
console.log(str1.slice(7, 12)); // World(12th char will be omitted so end index is optional in this method)
str5 = "Automation";
console.log(str5.slice(-6, -1)); // mation(negative index will be counted from the end of the string and -1 will be skipped so output will be mation)

//split() is used to split a string into an array of substrings
console.log("String Split");
let str8 = "Hello, World!";
console.log(str8.split("")); // ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
console.log(str8.split(" ")); // ["Hello", " World!"]

let words = str8.split(" ");
console.log(words[0]); // "Hello,"
console.log(words[1]); // "World!"