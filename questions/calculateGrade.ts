import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query: string): Promise<number> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(parseFloat(answer));
        });
    });
}

async function main() {
    const writtenTest = await askQuestion('Enter the score for Written Test: ');
    const labExams = await askQuestion('Enter the score for Lab Exams: ');
    const assignments = await askQuestion('Enter the score for Assignments: ');

    const weightedWrittenTest = (writtenTest * 70) / 100;
    const weightedLabExams = (labExams * 20) / 100;
    const weightedAssignments = (assignments * 10) / 100;

    const overallGrade = weightedWrittenTest + weightedLabExams + weightedAssignments;

    console.log(`Grade of the student is ${overallGrade.toFixed(1)}`);

    rl.close();
}

main().catch(error => console.error(error)).finally(() => rl.close());
