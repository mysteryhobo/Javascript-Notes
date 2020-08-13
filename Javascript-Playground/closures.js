

// Broken (all 5s)
// returns 5 5 5 5 5 
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// FIXED
// returns 0 1 2 3 4
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

// FIXED
// returns 0 1 2 3 4
for (var i = 0; i < 5; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 1000);
  })(i)
}

//Secret encapsulation example:
const createSecret = (secretMessage) => {
  return {
    getSecret: () => secretMessage
  }
}

// const secret = createSecret('test')

// console.log(secret.secretMessage) // undefined

// console.log(secret.getSecret()) // returns 'test'
test = 'cat'
// this.test = 'test';
console.log('this:', this)
const outerTest = () => {console.log('this:', this);}

const obj = {
  test: () => {console.log('this;', this)},
  test2: function () { return () => {console.log('this:', this)} }
};

outerTest(); // this: {test: 'test'}
obj.test(); // this: {test: 'test'}
//obj.test2(); // this: { test: [Function: test], test2: [Function: test2] } (the object)
obj.test2()(); // this: { test: [Function: test], test2: [Function: test2] } (the object)
const testFunc = obj.test2
testFunc()(); // this: GLOBAL OBJECT