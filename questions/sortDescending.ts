import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    const size: number = parseInt(await askQuestion('Enter the size of an array: '), 10);

    if (isNaN(size) || size <= 0) {
        console.log('Please enter a valid positive number for the size of the array.');
        rl.close();
        return;
    }

    const arrayValues = await askQuestion(`Enter ${size} values for the array (comma-separated): `);
    const array: number[] = arrayValues.split(',').map(value => parseInt(value.trim(), 10));
    
    if (array.length !== size || array.some(isNaN)) {
        console.log(`Please enter ${size} valid numbers for the array.`);
        rl.close();
        return;
    }

    array.sort((a, b) => b - a); 

    console.log('Sorted array:');
    console.log(array.join(', '));

    rl.close();
}

main().catch(error => console.error(error));
