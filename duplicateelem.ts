const findDuplicates = (arr: any[]): any[] => {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
};

console.log([...new Set(findDuplicates([1, 2, 3, 1, 4, 2]))]);