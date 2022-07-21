// what is pure Function ?

'* It Returns the same result if given the same arguments'
'* It dose not couse any observation side effects'

// Example : 

function sqr (n){
    return n*n
}
console.log(sqr(5));
console.log(sqr(5));
console.log(sqr(5));


// Impure Functions
// An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.



// For example, consider the following code snippet:

var addNew = 0;

function add(a,b){ 
  addNew =1; 
  return a + b + addNew
}

console.log(add(4,5))


