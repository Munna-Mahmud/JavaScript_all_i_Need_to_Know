// What is return in function in JavaScript?
// The return statement stops the execution of a function and returns a value.

// Call a function and save the return value in x:
var x = myFunction(4, 3);

function myFunction(a, b) {
  // Return the product of a and b
  return a * b;
}


function person (name, email){
    return {
        name: name,
        email: email
    }
}

var per1 = person('HM Nayem', 'hantan@gmail,.com')

console.log(per1);






