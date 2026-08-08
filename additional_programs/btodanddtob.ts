const decimalToBinary = (num: number): string => num.toString(2);
const binaryToDecimal = (bin: string): number => parseInt(bin, 2);

console.log(decimalToBinary(25));
console.log(binaryToDecimal("11001"));