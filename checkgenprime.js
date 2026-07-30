"use strict";
const isPrime = (num) => {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
console.log(isPrime(29));
const primesInRange = (start, end) => {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i))
            primes.push(i);
    }
    return primes;
};
console.log(primesInRange(10, 50));
