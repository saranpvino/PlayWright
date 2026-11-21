
//Named Function/function declaration
greet("Ramya") //Hoisting works
function greet(user){//parameters
    console.log("This is inside function with",user);
    console.log(`${user}`);    
}
greet("Saranya") //arguments
greet("Vijay")

function add(a,b){
    return a+b
}
console.log("Named Function:",add(2,3))

//Anonymous Function/function expression
//addition()//Hoisting throws ref error
let addition=function (){
    let c=5
    let d=5
    console.log("Function Expression:",c+d);
    //return a+b
}
addition()

//Arrow Function(shortest form of function expression)
let sum1=(i,j)=>i+j
console.log("Arrow Function:",sum1(1,1));

let sum2=(i,j)=>{
    //if I use return, then it should be inside curly braces
    return i+j
}
console.log("Arrow Function with return:",sum2(0,9));

//Call back Function
function login(uname,pwd){//also parameters as function which is call back function
console.log("Callback Function: Login");
uname(pwd)//represents enterUname(enterPwd)
}
function enterUname(x){
console.log("Enter Uname:");
x()//represents enterPwd()
}
function enterPwd(){
console.log("Enter Pwd:");

}
login(enterUname,enterPwd)//arguments as function which is call back function