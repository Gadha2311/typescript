import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function getArray(size: number, arrayName: string): Promise<number[][]> {
    const array: number[][] = [];
    console.log(`Enter the values of ${arrayName}:`);
    for (let i = 0; i < size; i++) {
        const rowValues = await askQuestion(`Row ${i + 1} (space-separated): `);
        const rowArray = rowValues.split(' ').map(value => parseFloat(value.trim()));
        if (rowArray.length !== size || rowArray.some(isNaN)) {
            console.log('Please enter valid numbers for each row.');
            i--;
        } else {
            array.push(rowArray);
        }
    }
    return array;
}

function addArray(array1: number[][], array2: number[][]): number[][] {
    const size = array1.length;
    const resultArray: number[][] = [];
    for (let i = 0; i < size; i++) {
        const row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        resultArray.push(row);
    }
    return resultArray;
}

function displayArray(array: number[][], message: string): void {
    console.log(message);
    for (const row of array) {
        console.log(row.join('\t'));
    }
}

async function main() {
    const size: number = parseInt(await askQuestion('Enter the size of array: '), 10);

    if (isNaN(size) || size <= 0) {
        console.log('Please enter a valid positive number for the size of the array.');
        rl.close();
        return;
    }

    const array1 = await getArray(size, 'Array 1');
    const array2 = await getArray(size, 'Array 2');
    const sumArray = addArray(array1, array2);

    displayArray(sumArray, 'Sum of Array 1 and Array 2:');
    rl.close();
}

main().catch(error => console.error(error));
