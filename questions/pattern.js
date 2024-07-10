function printPattern(rows) {
    for (var i = 1; i <= rows; i++) {
        var line = '';
        for (var j = 1; j <= i; j++) {
            line += j + ' ';
        }
        console.log(line.trim());
    }
}
var numberOfRows = 5;
printPattern(numberOfRows);
