// What are callbacks
// In JavaScript, functions are first-class citizens. Therefore, you can pass a function to another function as an argument.

// By definition, a callback is a function that you pass into another function as an argument for executing later.



// Example :
// The following defines a filter() function that accepts an array of numbers and returns a new array of odd numbers:

function filter(numbers) {
  let results = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers));


