const getFactorial = (n: number): number => (n === 0 || n === 1 ? 1 : n * getFactorial(n - 1));

const isStrong = (num: number): boolean => {
    const sum = num.toString().split("").reduce((acc, digit) => acc + getFactorial(parseInt(digit)), 0);
    return sum === num;
};

console.log(isStrong(145));