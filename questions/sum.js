"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter the first number: ', function (firstInput) {
    var firstNumber = parseFloat(firstInput);
    rl.question('Enter the second number: ', function (secondInput) {
        var secondNumber = parseFloat(secondInput);
        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            var sum = firstNumber + secondNumber;
            console.log("The sum of ".concat(firstNumber, " and ").concat(secondNumber, " is ").concat(sum));
        }
        else {
            console.log('Please enter valid numbers.');
        }
        rl.close();
    });
});
