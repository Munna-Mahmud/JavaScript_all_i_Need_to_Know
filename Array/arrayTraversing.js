var arr = [2, 6, 20, 25, 34, 7, 45, 60]
// increase 2 in every elemets 
for (var i = 0; i <arr.length; i++){
    arr[i] = arr[i] + 2
}

// console.log(arr);

//  sum of all array 
var sum = 0

for (var i = 0; i <arr.length; i++){
    sum += arr[i]
}
// console.log(sum);

// print the even number from the array 
var arra = [12, 30, 45, 7, 89, 65, 100, 5]
for (var i = 0; i<arra.length; i++){
    if (arra[i] % 2 === 0 ){
        console.log(arra[i]);
    }
}


// print the odd number from the array 
var arra = [12, 30, 45, 7, 89, 65, 100, 5]
for (var i = 0; i<arra.length; i++){
    if (arra[i] % 2 === 1 ){
        console.log(arra[i]);
    }
}