import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ',(firstInput:string)=>{
    const firstNumber=parseFloat(firstInput)

    rl.question('Enter the second number :',(secondInput:string)=>{
        const secondNumber=parseFloat(secondInput)

        if(!isNaN(firstNumber)&&!isNaN(secondNumber)){
            const sum = firstNumber + secondNumber
            console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`);    
        }
        else{
            console.log('Please enter a valid numbers');
            
        }

        rl.close()
    })
})

export {};
