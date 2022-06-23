//********* Ternary Operator *********//

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

// The structure 
//  condition ? expression_when_True : expression_when_false;

// with if else condition 
var b =10
if(b % 2 === 0){
    console.log('Even');
} else{
    console.log('Odd');
}

// with ternary Operator 

var result = b % 2 === 0 ? 'Even' : 'Odd';
console.log(result);