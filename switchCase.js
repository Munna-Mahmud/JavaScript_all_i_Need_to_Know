///****** Switch case Statement  ******///
// Definition and Usage. The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.

// Syntax 

// switch (expression) {
//     case value1:
//       //Statements executed when the
//       //result of expression matches value1
//       [break;]
//     case value2:
//       //Statements executed when the
//       //result of expression matches value2
//       [break;]
//     ...
//     case valueN:
//       //Statements executed when the
//       //result of expression matches valueN
//       [break;]
//     [default:
//       //Statements executed when none of
//       //the values match the value of the expression
//       [break;]]
//   }


// Example :  simple project 

var date = new Date()

var today = date.getDay();

switch (today) {
    case 0:
        console.log('Today is Sunday');
        break
    case 1:
        console.log('Today is Monday');
        break
    case 2:
        console.log('Today is Tuesday');
        break
    case 3:
        console.log('Today is Wednesday');
        break
    case 4:
        console.log('Today is Thursday');
        break
    case 5:
        console.log('Today is Friday');
        break
    case 5:
        console.log('Today is Saterday');
        break
}
