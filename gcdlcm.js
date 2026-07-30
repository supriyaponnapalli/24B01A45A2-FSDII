"use strict";
const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
const getLCM = (a, b) => (a * b) / getGCD(a, b);
console.log(getGCD(12, 18));
console.log(getLCM(12, 18));
