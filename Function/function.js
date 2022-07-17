// what is function ?

// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.


// Essay defination : JavaScript function is a group of code designed to perform a particular task. it function can be called anywhere in your program. 

// The basic syntax is shown here.

// function functionname(parameter-list) {
//     statements
//     }

example:

function sayHello() {
    alert("Hello there");
}

//  call function 

function hello() {
    //code
}

hello();

// Below are the rules for creating Js function:

// #1 Every function should begin with the keyword function followed by,

// #2 A user defined function name which should be unique,

// #3 A list of parameters enclosed within parenthesis and separated by commas,

// #4 A list of statement composing the body of the function enclosed within curly braces { }.

Example:

// Function definition
function greeting(name) {
    document.write("Hello " + name + " welcome to Elite-Corner");
}

// creating a variable
var nameVal = "Admin";

// calling the function
greeting(nameVal);

// OutPut : Hello Admin welcome to Elite-Corner


 // Different methods of declaring a JavaScript function

// Function Expression
// Anonymous Functions
// Immediately Invoked Function Expression
// Constructor Functions
// Getter Functions
// Hoisting
// Arrow Functions

// Function Expression
var greet = function () {
    console.log("Welcome to Javascript");
  };
  greet();


  // Arrow Functions

// let name = (arguements1, arguements2, arguements 3...) => {
//     statements
// };

// Immediately Invoked Function Expression

(function () {
    console.log("Welcome to Javascript");
  })();


  // Anonymous Functions

  var greet = function () {
    console.log("Welcome to Javascript");
};
greet();


// Constructor Functions

var F = new Function(arg1, functionBody)
var F = new Function(arg1, arg2, functionBody)
// var F = new Function(arg1, arg2, .........., argN, functionBody)

// Hoisting
// With JavaScript functions, it is possible to call functions before actually writing the code for the function statement and they give a defined output. This property is called hoisting
greet();

function greet() {
    console.log("Hello world");
}







