//Redeclaration and Reassignment are allowed by var
var course = "PlayWright"
var course = "Playwright with AI" //redelare

course = 12345  //reassign
console.log(course);
console.log(typeof course);


//let allows only reassignment but not redeclaration
let city ="chennai"
//let city="chennai" //Redeclaration not possible

city="Bangalore"    //Reassignment is possible

//const is final and fixed one(no redeclare and reassign)
const pan="cmdps0"
//const pan="cmdps0" // redeclare not possible
pan="abcd"
console.log(pan) // throw error because reassignment is not possible

