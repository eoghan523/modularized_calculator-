
import fs from 'fs';

//declare a calculator function//
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => { 
        if (b === 0) {
            throw new Error("Can't divide by 0...");
        } else {
            return a / b; // added return statement

        }
         

    }
}
module.exports = calculator;
