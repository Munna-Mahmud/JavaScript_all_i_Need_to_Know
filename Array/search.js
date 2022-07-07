// search the Data from the array 
var arr = [34,26, 7, 8, 90, 10, 34, 54, 654, 78, 5, 2]

var find = 100 
var isFound = false ;

for ( var i = 0; i < arr.length; i++){
    if (arr[i] === find){
        console.log('Data Found at Index Number' + ' ' + i)
        isFound = true
        break;
    }
}

if (!isFound){
    console.log('Data Not found');
}