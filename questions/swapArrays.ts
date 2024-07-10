import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    const size: number = parseInt(await askQuestion('Enter the size of arrays: '), 10);

    if (isNaN(size) || size <= 0) {
        console.log('Please enter a valid positive number for the size of arrays.');
        rl.close();
        return;
    }

    let array1: number[] = [];
    let array2: number[] = [];

    const array1Values = await askQuestion('Enter the values of Array 1 (comma-separated): ');
    const array1ValuesArray = array1Values.split(',').map(value => parseFloat(value.trim()));
    
    if (array1ValuesArray.length !== size || array1ValuesArray.some(isNaN)) {
        console.log('Please enter valid numbers for Array 1.');
        rl.close();
        return;
    }

    const array2Values = await askQuestion('Enter the values of Array 2 (comma-separated): ');
    const array2ValuesArray = array2Values.split(',').map(value => parseFloat(value.trim()));

    if (array2ValuesArray.length !== size || array2ValuesArray.some(isNaN)) {
        console.log('Please enter valid numbers for Array 2.');
        rl.close();
        return;
    }

    [array1, array2] = [array2ValuesArray, array1ValuesArray];

    console.log('Arrays after swapping:');
    console.log('Array1:', array1.join(', '));
    console.log('Array2:', array2.join(', '));

    rl.close();
}

main().catch(error => console.error(error));



