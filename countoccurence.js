"use strict";
const elementOccurrences = (arr) => {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};
console.log(elementOccurrences(["apple", "banana", "apple", "orange"]));
