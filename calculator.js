
import fs from 'fs';

//declare a calculator function. The claculator was shortened using ES6 arrow functions from the original caalculator earlier in the week. 
const calculator = {           //The calculator functions are objects within the calculator variable
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {             //This divide function has an If/ Else block to catch an error if the user trys to divide by 0. the else returns to the divide function.
        if (b === 0) {
            throw new Error("Can't divide by 0...");
        } else {
            return a / b; // added return statement
        }
    }
}
//This line of code is used in node.js to export this calculator module for use in other files. the '.exports' defines the export property of the module.
module.exports = calculator;
// "= calculator" makes the module importable to other files using 'require'. For example "const calculator = require('../calculator');"
