"use strict";
var MathOperations;
(function (MathOperations) {
    MathOperations.add = (a, b) => a + b;
    MathOperations.subtract = (a, b) => a - b;
    MathOperations.multiply = (a, b) => a * b;
    MathOperations.divide = (a, b) => (b !== 0 ? a / b : 0);
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.add(10, 5));
console.log(MathOperations.divide(20, 4));
