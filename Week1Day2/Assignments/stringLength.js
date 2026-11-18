let s = "Hello World"
let arr=s.split(" ");
console.log(arr[1].length);

s = " fly me to the moon ";
arr=s.split(" ");
console.log(arr[5].length);

//is str1 and str2 anagrams of each other?
let str1="Listen";
let str2 ="Silent";

let newstr1 = str1.trim().toLowerCase();
let newstr2 = str2.trim().toLowerCase();

//sort this as characters and compare with newstr2
newstr1=newstr1.split("").sort().join("");
newstr2=newstr2.split("").sort().join(""); 

console.log(newstr1 == newstr2);

//is str1 and str2 anagrams of each other?
str1="Hello";
str2 ="World";

newstr1 = str1.trim().toLowerCase();
newstr2 = str2.trim().toLowerCase();

//sort this as characters and compare with newstr2
newstr1=newstr1.split("").sort().join("");
newstr2=newstr2.split("").sort().join(""); 

console.log(newstr1 == newstr2);
