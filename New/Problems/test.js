// const steps = require('./steps');

// beforeEach(() => {
//   jest.spyOn(console, 'log')
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

// test('should log a single step', () => {
//   steps(1);
//   expect(console.log.mock.calls[0][0]).toEqual('#')
// })

// test('should log a two steps', () => {
//   steps(2);
//   expect(console.log.mock.calls[0][0]).toEqual('# ')
//   expect(console.log.mock.calls[1][0]).toEqual('##')
// })

// test('should log a three steps', () => {
//   steps(3);
//   expect(console.log.mock.calls[0][0]).toEqual('#  ')
//   expect(console.log.mock.calls[1][0]).toEqual('## ')
//   expect(console.log.mock.calls[2][0]).toEqual('###')
// })

// test('should log a 0 steps', () => {
//   steps(0);
//   expect(console.log).not.toHaveBeenCalled();
// })



// const pyramid = require('./pyramid.js');

// beforeEach(() => {
//   jest.spyOn(console, 'log');
// });

// afterEach(() => {
//   console.log.mockRestore();
// });

// test('handles 1 level', () => {
//   pyramid(1);
//   expect(console.log.mock.calls[0][0]).toEqual('#');
//   expect(console.log).toHaveBeenCalledTimes(1);
// })

// test('handles 2 level', () => {
//   pyramid(2);
//   expect(console.log.mock.calls[0][0]).toEqual(' # ');
//   expect(console.log.mock.calls[1][0]).toEqual('###');
//   expect(console.log).toHaveBeenCalledTimes(2);
// })

// test('handles 3 level', () => {
//   pyramid(3);
//   expect(console.log.mock.calls[0][0]).toEqual('  #  ');
//   expect(console.log.mock.calls[1][0]).toEqual(' ### ');
//   expect(console.log.mock.calls[2][0]).toEqual('#####');
//   expect(console.log).toHaveBeenCalledTimes(3);
// })

// test('handles 0 level', () => {
//   pyramid(0);
//   expect(console.log).not.toHaveBeenCalled();
// })



// const vowels = require('./vowels.js');

// test('should return 3 for "Hi There"', () => {
//   expect(vowels('Hi There')).toEqual(3);
// });

// test('should return 4 for "Why do you ask?"', () => {
//   expect(vowels('Why do you ask?')).toEqual(4);
// });

// test('should return 0 for "Why?"', () => {
//   expect(vowels('Why?')).toEqual(0);
// });


// const matrix = require('./matrix.js');

// test('should return a 0x0 matrix', () => {
//   expect(matrix(0)).toEqual([]);
// })

// test('should return a 1x1 matrix', () => {
//   expect(matrix(1)).toEqual([[1]]);
// })

// test('should return a 2x2 matrix', () => {
//   expect(matrix(2)).toEqual([[1, 2], [4, 3]]);
// })

// test('should return a 3x3 matrix', () => {
//   expect(matrix(3)).toEqual([[1, 2, 3],[8, 9, 4],[7, 6, 5]]);
// })

// test('should return a 4x4 matrix', () => {
//   expect(matrix(4)).toEqual([[1,   2,  3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10,  9,  8, 7]]);
// })




// const fib = require('./fibonacci.js');

// test('output 0 for 0', () => {
//   expect(fib(0)).toEqual(0);
// })

// test('output 1 for 1', () => {
//   expect(fib(1)).toEqual(1);
// })

// test('output 1 for 2', () => {
//   expect(fib(2)).toEqual(1);
// })

// test('calculates correct fib value for 3', () => {
//   expect(fib(3)).toEqual(2);
// });

// test('calculates correct fib value for 4', () => {
//   expect(fib(4)).toEqual(3);
// });

// test('output 5 for 5', () => {
//   expect(fib(5)).toEqual(5);
// })

// test('output 8 for 6', () => {
//   expect(fib(6)).toEqual(8);
// })

const weave = require('./weave.js');
const Queue = require('../Data-Structures/Queues.js');

test('queues have a front function', () => {
  const q = new Queue();
  expect(typeof q.front).toEqual('function');
});

test('front returns, but does not remove, the first value', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  expect(q.front()).toEqual(1);
  expect(q.front()).toEqual(1);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
});

test('weave is a function', () => {
  expect(typeof weave).toEqual('function');
});

test('weave can combine two queues', () => {
  const one = new Queue();
  one.enqueue(0);
  one.enqueue(2);
  one.enqueue(3);
  one.enqueue(4);
  const two = new Queue();
  two.enqueue('one');
  two.enqueue('two');
  two.enqueue('three');
  two.enqueue('four');

  const result = weave(one, two);
  expect(result.dequeue()).toEqual(0);
  expect(result.dequeue()).toEqual('one');
  expect(result.dequeue()).toEqual(2);
  expect(result.dequeue()).toEqual('two');
  expect(result.dequeue()).toEqual(3);
  expect(result.dequeue()).toEqual('three');
  expect(result.dequeue()).toEqual(4);
  expect(result.dequeue()).toEqual('four');
  expect(result.dequeue()).toBeUndefined();
});
