let arr=[1, 'Saranya', 'infy' ];
console.log(arr);
console.log(arr[1]);
console.log(arr.length);//length=index+1
console.log(arr[3]); //undefined

//pop() - removes the last element from an array and returns that element. This method changes the length of the array.
let popElement=arr.pop();
console.log("Popped:",popElement);//popped element means added value to array
console.log(arr);

//Push() - adds 1 or more elements to the end of an array and returns the new length of the array.
let pushElement=arr.push('Infy','Mcity');
console.log("Pushed:",pushElement);//lenth of array after push
console.log(arr);

//shift() - removes the first element from an array and returns that removed element. This method changes the length of the array.
let shiftElement=arr.shift();
console.log("Shifted:",shiftElement);//shifted element means removed value from array
console.log(arr);

//unshift() - adds 1 or more elements to the beginning of an array and returns the new length of the array.
let unshiftElement=arr.unshift('devi');
console.log("Unshifted:",unshiftElement);//lenth of array after push
console.log(arr);

//splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
let spliceElement=arr.splice(1,2,'Office','Infy','2022');
// first value 1 is start index, second value 2 is how many elements to remove, and the rest are any number of elements to add
console.log("Spliced(deleted elements):",spliceElement);//spliced element means removed and added values in array
console.log(arr);

//if delete count is 0
spliceElement=arr.splice(1,0,'wfh','hybrid','2024');
//first value 1 is start index, second value 0 is how many elements to remove, and the rest are any number of elements to add
console.log("Spliced(without deletion):",spliceElement);//null
console.log(arr);

//slice - used to extract the portion of array
let numArr=[12,34,23,78,14]
        //  0,1,2,3,4
        //  -5,-4,-3,-2,-1

console.log("Sliced Array:",numArr.slice());
console.log("Sliced Array(negative index):",numArr.slice(-4,-1));//start index is -4, end index is -1 which ll be skipped. so, it ll slice up to index -2
console.log("Sliced Array(indexed):",numArr.slice(0,3));//start index is 1, end index is 4 which ll be skipped. so, it ll slice up to index 3
console.log("Sliced Array(both +ve and -ve indexed):",numArr.slice(0,-2))
console.log("Sliced Array(same indexed):",numArr.slice(1,1))

numArr=[12,34,23,78,14]
console.log("Sorted Array:",numArr.sort());

let a=[3,6,5,7]
console.log("Sorted Array with arrow function:",a.sort((x,y)=>(x-y))); //x=3,y=6 Arrow function
console.log("Reverse Array:",a.reverse());

//filter - used to filter out the elements in arrray. Here it is taking above reverse result of array
console.log("Filtered Array:",a.filter(a=>(a>3)));

//join - used to convert array to string.Here it is taking above reverse result of array
console.log("Converted Array:",a.join("-"));

//map -used to transform the array elements
console.log("Mapped Array:",a.map(a=>(a+2))); //Arrow function










