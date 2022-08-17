// The forEach() method executes a provided function once for each array element.


const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

//  example : 
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}