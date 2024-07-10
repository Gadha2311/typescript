import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

class Array2D {
    private array: number[][] = [];

    async getArray(size: number): Promise<void> {
        console.log('Enter the array values:');
        for (let i = 0; i < size; i++) {
            const rowValues = await askQuestion(`Row ${i + 1} (space-separated): `);
            const rowArray = rowValues.split(' ').map(value => parseFloat(value.trim()));
            if (rowArray.length !== size || rowArray.some(isNaN)) {
                console.log('Please enter valid numbers for each row.');
                i--;
            } else {
                this.array.push(rowArray);
            }
        }
    }

    displayArray(): void {
        console.log('Array elements are:');
        for (const row of this.array) {
            console.log(row.join('\t'));
        }
    }
}

async function main() {
    const size: number = parseInt(await askQuestion('Enter the size of array: '), 10);

    if (isNaN(size) || size <= 0) {
        console.log('Please enter a valid positive number for the size of the array.');
        rl.close();
        return;
    }

    const array2D = new Array2D();
    await array2D.getArray(size);
    array2D.displayArray();

    rl.close();
}

main().catch(error => console.error(error));
