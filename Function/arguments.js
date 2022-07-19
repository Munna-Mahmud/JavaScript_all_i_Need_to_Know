
// what is arguments in js function ?
// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

Example:

function func1(a, b, c) {
    console.log(arguments[0]);
    // expected output: 1

    console.log(arguments[1]);
    // expected output: 2

    console.log(arguments[2]);
    // expected output: 3
}

func1(1, 2, 3);
OutPut:
// > 1
// > 2
// > 3


arguments[0] // first argument
arguments[1] // second argument
arguments[2] // third argument

function add(a, b) {
    var result = a + b
    console.log(result);
}

add(20, 30)


// This is another example 
var arr1 = [1, 6, 8]
var arr2 = [4, 2, 9]
var arr3 = [7, 5, 3]
// we are getting all array sum using loop 
// var sum1 = 0;
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0;
// for (var i= 0; i< arr2.length; i++){
//     sum2 +=arr2[i]
// }
// console.log(sum2);

// var sum3 = 0;
// for (var i= 0; i< arr3.length; i++){
//     sum3 +=arr3[i]
// }
// console.log(sum3);



// print sum of the arr1, arr2, arr3 using function
var sum= 0;
function myarraySum (arr){
    for (var i= 0; i< arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}

// myarraySum(arr1);
myarraySum(arr2);
// myarraySum(arr3);

// console.log(myarraySum(arr1, arr2, arr3));


