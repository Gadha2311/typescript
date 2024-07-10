const readline = require ('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve,reject)=>{
        rl.question(query,(input:string)=>{
            const number = parseFloat(input)
            if(!isNaN(number) && number >= 0 && number <=100){
                resolve(number)
            }
            else{
                reject('Please enter a valid mark between 0 and 100');
            }
        })
    })
}

async function main(){
    try{
        const mark : number = await askQuestion('Enter the mark :')
        if (mark >= 50) {
            console.log('Passed');
        } else {
            console.log('Failed');
        }
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
}

main(); 
 