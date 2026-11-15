//Write JS code to reverse the string (Testleaf)
let str1 = "Testleaf";
let str1Len=str1.length;
console.log("String Length: "+str1Len);
console.log("Reversed String: ");
for(let i=str1Len-1;i>=0;i--){
    console.log(str1.charAt(i));
}