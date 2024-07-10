const readline = require ('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

function askQuestion(query:string): Promise<number>{
    return new Promise ((resolve,reject)=>{
        rl.question(query,(input:string)=>{
            const number = parseFloat(input)
            if(!isNaN(number) && number >= 0 && number <=100){
                resolve(number)
            }
            else{
                reject('Please enter a valid percentage between 0 and 100')
            }
        })
    })
}

async function main() {
   try{
    const totalMark : number = await askQuestion('Enter your total mark percentage:')
    let grade:string
    if(totalMark > 90){
        grade = 'A'
    }
 else if (totalMark >= 80 && totalMark <= 89) {
    grade = 'B';
} else if (totalMark >= 70 && totalMark <= 79) {
    grade = 'C';
} else if (totalMark >= 60 && totalMark <= 69) {
    grade = 'D';
} else if (totalMark >= 50 && totalMark <= 59) {
    grade = 'E';
} else {
    grade = 'Failed';
}
console.log(`Your grade is: ${grade}`);
} catch (error) {
    console.error(error);
} finally {
    rl.close();
}
}

main();