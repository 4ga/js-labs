/**
 * Adds two numbers and returns the result.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Returns null when dividing by zero to avoid crashes.
 * @param {number} a
 * @param {number} b
 * @returns {number | null}
 */
export function divide(a, b) {
  if (b === 0 || b === -0) return null;
  return a / b;
}

/**
 * Returns true if the number is even, false otherwise
 * @param {number} n
 * @returns {boolean}
 */
export function isEven(n) {
  return n % 2 === 0;
}

/**
 * Returns true if the number is odd, false otherwise
 * @param {number} n
 * @returns {boolean}
 */
export function isOdd(n) {
  return n % 2 !== 0;
}
