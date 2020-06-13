/*******************************************************************************
Stacks:
- Last in First out (A stack of plates)
- Push(element) Adds an element to the stack
- Pop() : Removes an element from the stack
- Peek() : returns the top most elements in the stack, but doesn’t delete it
- isEmpty() : return true if the stack is empty
- printStack() : This method returns a string in which all the element of an stack is concatenated
*******************************************************************************/

class Stack {
  constructor () {
    this.items = [];
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) return null;
    else {
      return this.items.pop();
    }
  }

  peek() {
    if (this.isEmpty()) return null;
    else {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() { return this.items.length === 0; }

  printStack () {
    let accumulatedString = '';
    for (let i = 0; i < this.items.length; i ++) {
      accumulatedString += this.items[i] + ', '
    }
    console.log(accumulatedString)
  }
}

const stack = new Stack();

stack.push(10); 
stack.push(20); 
stack.push(30); 
  
// Printing the stack element 
// prints [10, 20, 30] 
stack.printStack()
  
// returns 30 
console.log(stack.peek()); 
  
// returns 30 and remove it from stack 
console.log(stack.pop()); 
  
// returns [10, 20] 
stack.printStack()