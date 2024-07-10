import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
    const inputString: string = await askQuestion('Enter a string: ');


    function isPalindrome(str: string): boolean {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    if (isPalindrome(inputString)) {
        console.log('Entered string is a palindrome');
    } else {
        console.log('Entered string is not a palindrome');
    }

    rl.close();
}

main().catch(error => console.error(error));
