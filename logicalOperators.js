//********** Logical Opetators **********//

// JavaScript defines the two operators && and || which represent the logical AND and OR operations, respectively. Using only the two boolean values true and false
// Truth Table Logical && and || operatoors 

// Logical AND operation
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// Logical OR operation
true || true; // true
true || false; // true
false || true; // true
false || false; // false


// Example:
// Logical AND operation
var x = 10;
var y = 20;
var z = 30;
if ( x > y && y < z){
    console.log('X is greater Than Y AND Y is Greater Than z');
} else{
    console.log('This condition is False');
}

// Logical OR operation
var x = 10;
var y = 20;
var z = 30;
if ( x > y || y < z){
    console.log('X is greater Than Y OR Y is Greater Than z');
} else{
    console.log('This condition is False');
}





