"use strict";
const rotateArray = (arr, positions) => {
    const n = positions % arr.length;
    return [...arr.slice(-n), ...arr.slice(0, -n)];
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));
