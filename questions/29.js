function myFilter(myArray, callback) {
    var sum = 0;
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var num = myArray_1[_i];
        if (callback(num)) {
            sum += num;
        }
    }
    return sum;
}
// Sample usage
var myArray = [1, 2, 3, 4, 5];
var callback = function (num) {
    var sumOfDigits = num.toString().split('').reduce(function (acc, curr) { return acc + parseInt(curr); }, 0);
    return sumOfDigits % 2 === 0;
};
console.log(myFilter(myArray, callback)); // Output: 15
