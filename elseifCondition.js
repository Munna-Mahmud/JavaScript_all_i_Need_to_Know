///****** if / else if  condition  ******///

// Else If conditional statements are conditional statements that have more than one condition. If the first condition is false, only then will the second condition will be checked. If the second one is also false, then the app will default to else or it will do nothing.

// for more check this
// https://cdn.programiz.com/sites/tutorial2program/files/js-if-else-if-statement_0.png

// The structure of if/ else/if condition 

/******
if (here is condition){
if condition true exicute here program will be stop. 
if false...
}  else if ( another condition here){
if true exicute this. if not
go to the below condition  
} else if (another condition){
if true exicute this. if not
go to the below condition  
} else {
if upper all condition false then this will be exicute and it's a true
}
 
******/

// Example : 
var a = 50;
var b = 30;

if (a < b) {
    console.log('B is bigger number'); //false
} else if (a > b) {
    console.log('A is Bigger number'); //true
} else {
    console.log('Both a and b same number'); //false
}


//  check it is odd or even 
var c = 0

if (c === 0) {
    console.log('C is a Zero');
} else if (c % 2 === 0) {
    console.log(c + ' Its a even number')
} else {
    console.log(c + ' its a odd number');
}