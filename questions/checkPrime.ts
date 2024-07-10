import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function isPrime(num: number): Promise<boolean> {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

async function main() {
    const userInput = await askQuestion('Enter a number: ');
    const number = parseInt(userInput, 10);

    if (isNaN(number)) {
        console.log('Invalid input. Please enter a valid number.');
    } else {
        const prime = await isPrime(number);
        if (prime) {
            console.log(`Entered number ${number} is a Prime number`);
        } else {
            console.log(`Entered number ${number} is not a Prime number`);
        }
    }

    rl.close();
}

main().catch(error => console.error(error));
