"use strict";
const charFrequency = (str) => {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
};
console.log(charFrequency("typescript"));
