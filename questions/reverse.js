var my_string = "1234";
try {
    var reversedString = my_string.split("").reverse().join("");
    console.log("Reversed string is : ".concat(reversedString));
}
catch (err) {
    console.log("Error : ".concat(err.message));
}
finally {
    console.log("Type of my_string is : ".concat(typeof my_string));
}
