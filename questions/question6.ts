const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve, reject) => {
        rl.question(query, (input: string) => {
            const number = parseInt(input, 10);
            if (!isNaN(number)) {
                resolve(number);
            } else {
                reject('Please enter a valid number.');
            }
        });
    });
}

async function main() {
    try {
        const dayNumber: number = await askQuestion('Enter a number (1-7): ');

        let day: string;

        switch (dayNumber) {
            case 1:
                day = 'Sunday';
                break;
            case 2:
                day = 'Monday';
                break;
            case 3:
                day = 'Tuesday';
                break;
            case 4:
                day = 'Wednesday';
                break;
            case 5:
                day = 'Thursday';
                break;
            case 6:
                day = 'Friday';
                break;
            case 7:
                day = 'Saturday';
                break;
            default:
                day = 'Invalid Entry';
                break;
        }

        console.log(day);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main();
