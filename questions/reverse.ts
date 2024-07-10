let my_string: any ="1234";

try {
  const reversedString = my_string.split("").reverse().join("");

  console.log(`Reversed string is : ${reversedString}`);
} catch (err) {
  console.log(`Error : ${err.message}`);
} finally {
  console.log(`Type of my_string is : ${typeof my_string}`);
}
