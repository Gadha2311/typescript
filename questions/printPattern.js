function printPattern(rows) {
    var number = 1;
    for (var i = 1; i <= rows; i++) {
        var rowPattern = '';
        for (var j = 1; j <= i; j++) {
            rowPattern += number + '\t';
            number++;
        }
        console.log(rowPattern.trim());
    }
}
var rows = 4;
printPattern(rows);
