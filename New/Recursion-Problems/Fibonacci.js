/*
  Fibonacci
  Base Case: n === 0, n === 1
*/

function fibonacci(num) {
  if (num === 0) return 1;
  if (num === 1) return 1; 
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log('fibonacci(0)', fibonacci(0))
console.log('fibonacci(1)', fibonacci(1))
console.log('fibonacci(5)', fibonacci(5))
console.log('fibonacci(12)', fibonacci(44))


/*
  With Memoization
*/

function fibonacci2(num) {
  const map = {
    0: 1,
    1: 1
  };

  function fib(num) {
    if (map[num] !== undefined) return map[num]; //basecase // always use undefined to check array elements because if element if 0 it will be coerced to false
    else {
      map[num] = fib(num - 1) + fib(num - 2);
      return map[num]; // technically this can be one line but I think this is more readable
    }
  }

  return fib(num);
}

console.log('fibonacci2(0)', fibonacci2(0))
console.log('fibonacci2(1)', fibonacci2(1))
console.log('fibonacci2(5)', fibonacci2(5))
console.log('fibonacci2(12)', fibonacci2(44))
