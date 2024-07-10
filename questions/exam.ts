import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a character: ', (char: string) => {
    if (char.length === 1) {
        console.log(`You entered: ${char}`);
    } else {
        console.log('Please enter only one character.');
    }
    rl.close();
});

export {};


