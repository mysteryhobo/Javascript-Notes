// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const { performance } = require('perf_hooks');

function fib(n) {
  const map = {
    0: 0,
    1: 1,
  };

  function fibonacci(n) {
    if (map[n] !== undefined) return map[n];
    else {
      map[n] = fibonacci(n - 2) + fibonacci(n - 1);
      return map[n];
    }
  }

  return fibonacci(n);
}

const t0 = performance.now();
console.log(fib(1000))
const t1 = performance.now();

console.log('took: ', t1 - t0, 'ms')

module.exports = fib;
