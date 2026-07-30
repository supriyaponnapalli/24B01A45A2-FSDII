const sumOfDigits = (num: number): number => 
    num.toString().split("").reduce((acc, val) => acc + parseInt(val), 0);

console.log(sumOfDigits(456));