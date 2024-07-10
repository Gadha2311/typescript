const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve, reject) => {
        rl.question(query, (input: string) => {
            const number = parseFloat(input);
            if (!isNaN(number) && number >= 0) {
                resolve(number);
            } else {
                reject('Please enter a valid non-negative number.');
            }
        });
    });
}

async function main() {
    try {
        const principal: number = await askQuestion('Enter the principal amount (P): ');
        const rate: number = await askQuestion('Enter the interest rate (R): ');
        const years: number = await askQuestion('Enter the number of years (n): ');

        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
            throw new Error('Invalid input. Please enter valid numbers.');
        }

        const simpleInterest: number = (principal * rate * years) / 100;

       
        
        console.log(`Simple Interest (SI): ${simpleInterest}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();
