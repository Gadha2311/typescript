import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

function getArray(): Promise<number[]> {
    return new Promise(async (resolve) => {
        const size: number = parseInt(await askQuestion('Enter the size of the array: '), 10);

        if (isNaN(size) || size <= 0) {
            console.log('Please enter a valid positive number for the size of the array.');
            rl.close();
            return resolve([]);
        }

        const array: number[] = [];
        console.log('Enter the values of the array (comma-separated):');
        const inputValues = await askQuestion('');
        const values = inputValues.split(',').map(value => parseInt(value.trim(), 10));

        if (values.length !== size || values.some(isNaN)) {
            console.log(`Please enter ${size} valid numbers.`);
            rl.close();
            return resolve([]);
        }

        return resolve(values);
    });
}

function displayArray(array: number[]): void {
    console.log('Array values:');
    console.log(array.join(', '));
}

async function main() {
    const array = await getArray();
    displayArray(array);
    rl.close();
}

main().catch(error => console.error(error));
