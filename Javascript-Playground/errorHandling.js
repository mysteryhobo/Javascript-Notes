

// Errors throw in promisses that do not have a .catch block will throw Unhandled promise Rejection and wont be caught by subsequent catches 
// none of external try catch blocks shown below catch the errors  


console.log('************************************************************************')
console.log('Example: 1: Error thrown in promise')
console.log('************************************************************************')


const test = () => new Promise((resolve, reject) => {
  throw new Error('Test1 Error')
})

try {
  test()
  .then((res) => {
    console.log('TEST:', res) // not fired
  })
} catch (error) { //does not catch error
console.log('CAUGHT ERROR: ', error) // not logged
}


console.log('************************************************************************')
console.log('Example: 2: Error thrown in .then')
console.log('************************************************************************')


const test2 = () => new Promise((resolve, reject) => {
  resolve()
})

try {
  test2()
  .then((res) => {
    throw new Error('Test2 Error')
    console.log('TEST:', res) // not fired
  })
} catch (error) { //does not catch error
  console.log('CAUGHT ERROR: ', error) // not logged
}


console.log('************************************************************************')
console.log('Example: 3: Error thrown in awaited function')
console.log('************************************************************************')


const test3 = async () => {
  // return 'test'
  throw new Error('Test3 Error');
};

try {
  (async () => {
    await test3(); // unhandled promise Rejection
    console.log('myValue:', myvalue) // not logged 
  })();
} catch (error) {
  console.log('CAUGHT ERROR: ', error) // not logged
}


console.log('************************************************************************')
console.log('Example: 4: Error thrown in async function')
console.log('************************************************************************')


try {
  (async () => {
    throw new Error('Test4 Error')
    console.log('myValue:', myvalue) // not logged 
  })();
} catch (error) {
  console.log('CAUGHT ERROR: ', error) // not logged
}