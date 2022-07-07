// Insert and Remove Element 


var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// Insert 9 to index 3 
// arr[3] = 9// it;s add a element but first remove the old element then add new one

//arr.push(9) // push method add a element in the last index position
//arr.unshift(9) // unshift method add a element in the first index position

// arr.splice(3, 0, 9, 10)
//  explation : arr.splice(3 number index, 0 it means don't remove old one, add next 9, 10 )


arr.pop()
arr.shift()

console.log(arr);