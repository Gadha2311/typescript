function printPattern(rows: number): void {
    let number = 1;

    for (let i = 1; i <= rows; i++) {
        let rowPattern = '';

        for (let j = 1; j <= i; j++) {
            rowPattern += number + '\t';
            number++;
        }

        console.log(rowPattern.trim());
    }
}


const rows = 4;
printPattern(rows);
