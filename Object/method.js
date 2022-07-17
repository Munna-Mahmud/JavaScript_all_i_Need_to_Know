var obj1 = {
    a: 20,
    b: 30,
    c : 76
}

console.log(Object.keys(obj1)); // ['a', 'b', 'c',]
console.log(Object.values(obj1)); // [20, 30, 76]
console.log(Object.entries(obj1)); // [ [ 'a', 20 ], [ 'b', 30 ], [ 'c', 76 ] ]


// var obj2 = obj1
// obj2.a = 70
// obj2.b = 100

// console.log(obj1); //{ a: 70, b: 100, c: 76 }
// console.log(obj2);// { a: 70, b: 100, c: 76 }

// good way 
var obj2 = Object.assign({}, obj1)
obj2.a = 300
console.log(obj1); //{ a: 20, b: 30, c: 76 }
console.log(obj2);  //{ a: 300, b: 30, c: 76 }
