import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculator {
    addition(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtraction(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiplication(num1: number, num2: number): number {
        return num1 * num2;
    }

    division(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
    }
}

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    const calculator = new Calculator();

    console.log('Menu:');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Exit');

    while (true) {
        const choiceInput = await askQuestion('Enter your choice (1-5): ');
        const choice = parseInt(choiceInput, 10);

        switch (choice) {
            case 1:
                const addNum1 = parseFloat(await askQuestion('Enter first number: '));
                const addNum2 = parseFloat(await askQuestion('Enter second number: '));
                console.log(`Result: ${calculator.addition(addNum1, addNum2)}`);
                break;
            case 2:
                const subNum1 = parseFloat(await askQuestion('Enter first number: '));
                const subNum2 = parseFloat(await askQuestion('Enter second number: '));
                console.log(`Result: ${calculator.subtraction(subNum1, subNum2)}`);
                break;
            case 3:
                const mulNum1 = parseFloat(await askQuestion('Enter first number: '));
                const mulNum2 = parseFloat(await askQuestion('Enter second number: '));
                console.log(`Result: ${calculator.multiplication(mulNum1, mulNum2)}`);
                break;
            case 4:
                const divNum1 = parseFloat(await askQuestion('Enter first number: '));
                const divNum2 = parseFloat(await askQuestion('Enter second number: '));
                try {
                    console.log(`Result: ${calculator.division(divNum1, divNum2)}`);
                } catch (error) {
                    console.log(error.message);
                }
                break;
            case 5:
                rl.close();
                return;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 5.');
        }
    }
}

main().catch(error => console.error(error)).finally(() => rl.close());
