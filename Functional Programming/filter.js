const arr = [1, 4, 6, 7, 8, 5, 3, 10, 13]

// const newarr= arr.filter(function(value){
//     return  value % 2 === 0  // logic ja mon cai tai korte parbo 
// })

// console.log(newarr); // output = [ 4, 6, 8, 10 ]



// same things  but and the number in the new array 

function myfilter(arr){
    var newarr = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            newarr.push(arr[i])
        }
    }
    return newarr
}

console.log(myfilter(arr));
