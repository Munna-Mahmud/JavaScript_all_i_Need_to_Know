//********** While LOOPS  ********//


// Syntex 

// Syntax
// while (condition) {
//   Block of code
// }
// Example : 

// var i=8;
// while (i<10){
//  console.log("I is less than 10");
//  i++;
// }


var isRunning = true

while (isRunning){
    var cuponCode = Math.floor(Math.random() * 10 + 1)
    if( cuponCode === 6 ){
        console.log("Champion Champion");
        isRunning = false
    } else{
        console.log('Your Copon Code is ' + cuponCode);
    }
} 


