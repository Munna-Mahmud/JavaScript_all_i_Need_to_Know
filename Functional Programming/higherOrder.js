// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. A “higher-order function” is a function that accepts functions as parameters and/or returns a function.


// This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

// Basically, a function which takes another function as an argument or returns a function is known as a higher order function.


// How to Pass a Function as an Argument to Another Function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function filterOdd(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterOdd(arr));

// Output:
// [ 1, 3, 5, 7, 9, 11 ]