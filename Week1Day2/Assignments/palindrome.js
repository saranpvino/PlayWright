function isPalindrome(str) {
let str2=str.toLowerCase().split("").reverse().join("");
//console.log(str2);
console.log(str.toLowerCase() == str2);
}

isPalindrome("Madam");