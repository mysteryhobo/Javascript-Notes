// https://www.fullstack.cafe/blog/javascript-code-interview-questions



// 1. Given a string, reverse each word in the sentence

const reverseStringWithSeparator = (stringToReverse, separator) => 
  stringToReverse.split(separator).reverse().join(separator);


/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
// 2. Implement enqueue and dequeue using only two stacks

const createQueue = () => {
  const inputStack = [];
  const outputStack = [];

  function enqueue(item) {
    inputStack.push(item);
  }

  function dump() {
    while(inputStack.length > 0) {
      outputStack.push(inputStack.pop());
    }
  }

  function dequeue() {
    if (outputStack.length === 0 && inputStack.length === 0) return null;
    else if (outputStack.length === 0) {
      dump();
      return outputStack.pop()
    } else {
      return outputStack.pop()
    }
  }

  function logStacks() {
    console.log('inputStack:', inputStack, 'outputStack:', outputStack)
  }

  return {
    enqueue,
    dequeue,
    logStacks
  };
}

// Testing
// const myQueue = createQueue();
// myQueue.logStacks()
// myQueue.enqueue('cat');
// myQueue.logStacks()
// myQueue.dequeue()
// myQueue.logStacks()
// myQueue.enqueue('dog');
// myQueue.logStacks()
// myQueue.enqueue('frog');
// myQueue.logStacks()
// myQueue.enqueue('fish');
// myQueue.logStacks()
// myQueue.dequeue()
// myQueue.logStacks()
// myQueue.enqueue('lion');
// myQueue.logStacks()
// myQueue.dequeue()
// myQueue.logStacks()
// myQueue.dequeue()
// myQueue.logStacks()
// myQueue.dequeue()
// myQueue.logStacks()



/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
// 3. Write a "mul" function which will multiply properly when invoked with this syntax: console.log(mul(2)(3)(4)); // output : 24

// Method 1: only works for 3 numbers
const mul1 = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z
    }
  }
}

//Method 2: different extensible implementation with internal logging
const mul2 = (value1, value2) => {
  let baseValue = value2 || 1; //allows for option 2 parameters
  console.log(value1 * baseValue)
  return (newValue) => mul2(newValue, value1 * baseValue)
}

// Testing
// mul2(5, 4);
// mul2(5)(4)(3)



/*********************************************************/
/*********************************************************/
/*********************************************************/
/*********************************************************/
// 4. How to empty an array in JavaScript?

// method 1: Leaves References
arrayList = [];

// method 2/3: Doesn't Leave References
arrayList.length = 0;
arrayList.splice(0, arrayList.length);
