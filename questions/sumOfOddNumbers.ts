const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve, reject) => {
        rl.question(query, (input: string) => {
            const number = parseInt(input, 10);
            if (!isNaN(number) && number > 0) {
                resolve(number);
            } else {
                reject('Please enter a valid positive number.');
            }
        });
    });
}

async function main() {
    try {
        const limit: number = await askQuestion('Enter a limit: ');

        let sum = 0;
        for (let i = 1; i <= limit; i++) {
            if (i % 2 !== 0) {
                sum += i;
            }
        }

        console.log(`Sum of odd numbers = ${sum}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();
