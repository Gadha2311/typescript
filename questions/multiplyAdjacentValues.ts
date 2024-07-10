import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    const limit: number = parseInt(await askQuestion('Enter the array limit: '), 10);

    if (isNaN(limit) || limit <= 1) {
        console.log('Please enter a valid positive number greater than 1 for the array limit.');
        rl.close();
        return;
    }

    const arrayValues = await askQuestion('Enter the values of the array (space-separated): ');
    const array: number[] = arrayValues.split(' ').map(value => parseFloat(value.trim()));

    if (array.length !== limit || array.some(isNaN)) {
        console.log('Please enter valid numbers for the array.');
        rl.close();
        return;
    }

    const resultArray: number[] = [];

    for (let i = 0; i < array.length - 1; i++) {
        resultArray.push(array[i] * array[i + 1]);
    }

    console.log('Output:');
    console.log(resultArray.join('\t'));

    rl.close();
}

main().catch(error => console.error(error));
