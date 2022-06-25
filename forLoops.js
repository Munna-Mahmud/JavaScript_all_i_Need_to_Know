//********** For LOOPS  ********//


// Syntex 

// for ([initialization];[condition];[final-expression]){
//     Block of code
//  }


// Example : 
// print 1 to 10 / ten times 
for (var i=0; i<10; i++){
    console.log("The Value of i Is "  + (i + 1));
}

// odd/even number from 1 to 100

for (var i = 0; i <= 100; i++){
 if( i % 2 === 0){
    console.log(i)
 }
}

for (var i = 0; i <= 100; i++){
    if( i % 2 === 1){
       console.log(i)
    }
   }

//sum of even numbers between 1 to 100
   var sum = 0
   for (var i =1; i<= 100; i++){
    if(i % 2 === 0){
        sum +=i
    }
   }

   console.log(sum);
   
