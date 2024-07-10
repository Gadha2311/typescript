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

   
    async function create2DArray(prompt: string): Promise<number[][]> {
        console.log(`Enter the values of ${prompt}`);
        const array: number[][] = [];

        for (let i = 0; i < size; i++) {
            const inputRow = await askQuestion(`Row ${i + 1}: `);
            const values = inputRow.split(' ').map(val => parseInt(val.trim(), 10));
            
            if (values.length !== size || values.some(isNaN)) {
                console.log(`Please enter ${size} valid numbers for row ${i + 1}.`);
                rl.close();
                return [];
            }

            array.push(values);
        }

        return array;
    }

  
    const array1 = await create2DArray('array 1');

    if (array1.length === 0) return;

   
    const array2 = await create2DArray('array 2');

    if (array2.length === 0) return;

    const sumArray: number[][] = [];

    for (let i = 0; i < size; i++) {
        const row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(row);
    }

  
    console.log('Sum of 2 arrays is:');
    sumArray.forEach(row => console.log(row.join(' ')));

    rl.close();
}

main().catch(error => console.error(error));
