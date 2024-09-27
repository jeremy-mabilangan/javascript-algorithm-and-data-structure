// <------------------- FIBONACCI ------------------->
const fibonacci = (n) => {
  const arr = [];
  let sum = 0,
    x = 0,
    y = 1;

  for (let i = 0; i < n; i++) {
    arr.push(x); //       0, 1, 1, 2, 3, 5,  8,
    sum = x + y; // sum = 1, 2, 3, 5, 8, 13, 21,
    x = y; //         x = 1, 1, 2, 3, 5, 8,  13,
    y = sum; //       y = 1, 2, 3, 5, 8, 13, 21,
  }

  return arr;

  // Big-O = O(n)
};

console.log("FIBONACCI:");
console.log(fibonacci(3)); // [0, 1]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// <------------------- FIBONACCI ------------------->

// <------------------- FACTORIAL ------------------->
const factorial = (n) => {
  let product = 1;

  for (let i = 2; i <= n; i++) {
    product = product * i;
  }

  return product;

  // Big-O = O(n)
};

console.log("FACTORIAL:");
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// <------------------- FACTORIAL ------------------->

// <------------------- FACTORIAL ------------------->
const isPrime = (n) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;

  // Big-O = O(Math.sqrt(n))
};

console.log("IS PRIME:");
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(11)); // true

// <------------------- FACTORIAL ------------------->

// <------------------- POWER OF TWO ------------------->
const isPowerOfTwo = (n) => {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;

  // Big-O = O(logn)
};

const isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;

  // Big-O = O(1)
};

console.log("IS POWER OF TWO:");
console.log(isPowerOfTwO(1)); // true
console.log(isPowerOfTwO(2)); // true
console.log(isPowerOfTwO(5)); // false

console.log("IS POWER OF TWO BIT WISE:");
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// <------------------- POWER OF TWO ------------------->

// <------------------- RECURSIVE FIBONACCI ------------------->
const recursiveFibonacci = (n) => {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);

  // Big-O = O(2^n)
};

console.log("RECURSIVE FIBONACCI:");
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// <------------------- RECURSIVE FIBONACCI ------------------->

// <------------------- RECURSIVE FACTORIAL ------------------->
const recursiveFactorial = (n) => {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);

  // Big-O = O(n)
};

console.log("RECURSIVE FACTORIAL:");
console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// <------------------- RECURSIVE FACTORIAL ------------------->
