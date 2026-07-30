const elementOccurrences = (arr: any[]): Record<string, number> => {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};

console.log(elementOccurrences(["apple", "banana", "apple", "orange"]));