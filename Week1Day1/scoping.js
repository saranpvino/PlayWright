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

}

//Global scoped()
let empId=123
function empDetails(){
    let gender = "Female"
if(gender="Female"){
    var name1="saran"
    let age=35
    const num=3
console.log("Inside:",name1);
console.log("Inside:",age);
console.log("Inside:",num);
console.log("Inside:",empId);
}
console.log("Outside:",name1);
//console.log("Outside:",age);//ref error
//console.log("Outside:",num)//ref error
console.log("Outside:",empId);

}
