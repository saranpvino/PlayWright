//Block scoped(let and const)
let gender = "Female"
if(gender="Female"){
    var name1="saran"
    let age=35
    const num=3
console.log("Inside:",name1);
console.log("Inside:",age);
console.log("Inside:",num)

}
console.log("Outside:",name1);
//console.log("Outside:",age);//ref error
//console.log("Outside:",num)//ref error

//Function scoped(var)
function empDetails(){
    gender = "Female"
    var name1="saran"
    let age=35
    const num=3
if(gender="Female"){   
console.log("Inside:",name1);
console.log("Inside:",age);
console.log("Inside:",num);
}
console.log("Outside:",name1);
console.log("Outside:",age);
console.log("Outside:",num);
}
empDetails();

//Global scoped(var,let,const)
const browserVersion = "Chrome";

function getBrowserVersion() {
    
 if (browserVersion == "Chrome") {

     let application = "Microsoft"
     var userName= "Public"

        console.log("Inside If:",application);
        console.log("Inside If:",userName);
    }
    
  console.log("Outside If:",browserVersion);
  console.log("Outside If:",userName);
     }
getBrowserVersion();

console.log("Outside function block:",browserVersion);