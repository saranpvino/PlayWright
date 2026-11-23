//js object to handle asynchronous operation
//pending,resolve,reject

/*let marks=36
let studentRecord =new Promise((resolve,reject)=>{
if(marks>35)
    resolve("Passed")
else
    reject("Failed")
})
//console.log(studentRecord);
//printing with then and catch to see result and error
studentRecord
.then(result=>console.log(result))
.catch(error=>console.log(error))*/

//async - await KEYWORDS to execute each line in sequence
let marks=36
function getResult(){
    return new Promise((resolve,reject)=>{
    if(marks>35)
        resolve("Passed")
    else
        reject("Failed")
    })      
}

async function progress(){
    try{
        const result= await getResult();
        console.log(result); 
    }
    catch(error)
    {
        console.log(error);  
    }
}
progress()