"use strict";
// import * as readline from 'readline';
Object.defineProperty(exports, "__esModule", { value: true });
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Enter a character: ', (char: string) => {
//     if (char.length === 1) {
//         console.log(`You entered: ${char}`);
//     } else {
//         console.log('Please enter only one character.');
//     }
//     rl.close();
// });
// export {};
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a character: ', function (char) {
    if (char.length === 1) {
        console.log("you entered:".concat(char));
    }
    else {
        console.log('please enter only one character');
    }
    rl.close();
});
