"use strict";
const secondLargest = (arr) => {
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1];
};
console.log(secondLargest([10, 20, 4, 45, 99]));
