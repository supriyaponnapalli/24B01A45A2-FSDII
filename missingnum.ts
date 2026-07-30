const findMissingNumber = (arr: number[], n: number): number => {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
};

console.log(findMissingNumber([1, 2, 4, 5], 5));