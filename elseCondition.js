//************* elseCondition **********//

// The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.



// The structure of if/else condition 

/****** 
if (here is condition){
if condition true then condition stop here , 
if not then   
}  else{
this is a true 
}

*******/
// Example : 
var a = 50;
var b = 100;

if (a < b) {
    console.log('b is bigger number'); //true
} else {
    console.log('b is smaller number'); //false
}


if (a > b) {
    console.log('b is bigger number'); //false
} else {
    console.log('b is smaller number'); //true
}


//  check it is odd or even 
var c = 6
if (c % 2 === 0) {
    console.log(c + 'Its a even number') //true
} else {
    console.log(c + 'is a odd number'); //false
}


var c = 7
if (c % 2 === 0) {
    console.log(c + 'Its a even number')  //false
} else {
    console.log(c + 'is a odd number'); //true
}




