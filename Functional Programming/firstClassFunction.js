// What is first class function ?

// First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.

// Note : Javascript function is kind of object

function add(a, b) {
    return a + b
}
// 1. A function can be stored in a variable
var sum = add
console.log(sum(4, 5));
console.log(typeof sum);
// 2. A function can be Stored in a Array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](5, 7));

// 3. A Fucntion can be stored in an Object
var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(8, 6));

// 4. We can create Function as need
setTimeout(function () {
    console.log('I have created....')

}, 100)

// 5. We can Pass Function as an ARguments

// 6. We can return Functions from Another Function 