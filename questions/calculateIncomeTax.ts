import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(parseFloat(answer));
        });
    });
}

function calculateTax(income: number): number {
    if (income <= 250000) {
        return 0;
    } else if (income <= 500000) {
        return (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        return (250000 * 0.05) + ((income - 500000) * 0.20);
    } else {
        return (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
    }
}

async function main() {
    const annualIncome = await askQuestion('Enter the annual income: ');

    if (isNaN(annualIncome) || annualIncome < 0) {
        console.log('Please enter a valid positive number for the annual income.');
        rl.close();
        return;
    }

    const taxAmount = calculateTax(annualIncome);
    console.log(`Income tax amount = ${taxAmount.toFixed(2)}`);

    rl.close();
}

main().catch(error => console.error(error)).finally(() => rl.close());
