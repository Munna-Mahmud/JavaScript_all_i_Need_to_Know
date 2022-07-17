const obj1 = {
    a: 20,
    b: 30
}

const obj2 = {
    a: 20,
    b: 30
}


if (obj1.a === obj2.a && obj1.b === obj2.b){
    console.log(true);
} else{
    console.log(false);
}

// this is a simple tricks to compare two object 
// stringify is now converting all object data as a string then stringify start comparering 
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));