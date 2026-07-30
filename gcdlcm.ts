const getGCD = (a: number, b: number): number => (b === 0 ? a : getGCD(b, a % b));
const getLCM = (a: number, b: number): number => (a * b) / getGCD(a, b);

console.log(getGCD(12, 18));
console.log(getLCM(12, 18));