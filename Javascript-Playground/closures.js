

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

const secret = createSecret('test')

console.log(secret.secretMessage) // undefined

console.log(secret.getSecret()) // returns 'test'