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



const pyramid = require('./pyramid.js');

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('handles 1 level', () => {
  pyramid(1);
  expect(console.log.mock.calls[0][0]).toEqual('#');
  expect(console.log).toHaveBeenCalledTimes(1);
})

test('handles 2 level', () => {
  pyramid(2);
  expect(console.log.mock.calls[0][0]).toEqual(' # ');
  expect(console.log.mock.calls[1][0]).toEqual('###');
  expect(console.log).toHaveBeenCalledTimes(2);
})

test('handles 3 level', () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual('  #  ');
  expect(console.log.mock.calls[1][0]).toEqual(' ### ');
  expect(console.log.mock.calls[2][0]).toEqual('#####');
  expect(console.log).toHaveBeenCalledTimes(3);
})

test('handles 0 level', () => {
  pyramid(0);
  expect(console.log).not.toHaveBeenCalled();
})