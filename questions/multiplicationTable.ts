const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve, reject) => {
        rl.question(query, (input: string) => {
            const number = parseInt(input, 10);
            if (!isNaN(number)) {
                resolve(number);
            } else {
                reject('Please enter a valid number.');
            }
        });
    });
}

async function main() {
    try {
        const number: number = await askQuestion('Enter a number: ');

        console.log(`Multiplication table for ${number}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} x ${number} = ${i * number}`);
        }
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();
