// what is array ?

// In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index. An JavaScript array has the following characteristics: First, an array can hold values of mixed types. For example, you can have an array that stores elements with the types number, string, and boolean.


// example : 

// let arrayName = [element1, element2, element3, ...];

var rollNumber = [34, 54, 87, 23, 12, 87, 100, 23, 55]

// [] it's called square brackets 


// get the first element on an array 
getFirstValue([1, 2, 3]) 

getFirstValue([80, 5, 100]) 

getFirstValue([-500, 0, 50]) 

function getFirstValue(arr) {
	return arr[0]
}
