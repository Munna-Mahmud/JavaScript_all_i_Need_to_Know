// What is closure ?
// jodi kono scope er vitore bahirer kono scope  theke data ashe setake closure bole 

var a = 34;
function ab() {
    var x = 17
    // console.log(a);
    return function () {
        console.log(x);
    }
}
var abc = ab()
console.dir(abc);



// example two 
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


