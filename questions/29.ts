function myFilter(myArray: number[], callback: (num: number) => boolean): number {
    let sum = 0;
    for (let num of myArray) {
      if (callback(num)) {
        sum += num;
      }
    }
    return sum;
  }
  
 
  const myArray = [1, 2, 3, 4, 5];
  const callback = (num: number) => {
    const sumOfDigits = num.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    return sumOfDigits % 2 === 0;
  };
  
  console.log(myFilter(myArray, callback)); 