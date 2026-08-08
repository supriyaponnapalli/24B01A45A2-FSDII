namespace MathOperations {
    export const add = (a: number, b: number): number => a + b;
    export const subtract = (a: number, b: number): number => a - b;
    export const multiply = (a: number, b: number): number => a * b;
    export const divide = (a: number, b: number): number => (b !== 0 ? a / b : 0);
}

console.log(MathOperations.add(10, 5));
console.log(MathOperations.divide(20, 4));