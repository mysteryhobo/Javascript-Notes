/*
 Create a Queue using two stacks
 Source: https://www.youtube.com/watch?v=7ArHz8jPglw&list=PLI1t_8YX-Apv-UiRlnZwqqrRT8D1RhriX&index=2
*/

class Queue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(element) {
    this.inputStack.push(element);
  }

  dequeue() {
    if (this.outputStack.length === 0) {
      this._dump();
    }
    if (this.outputStack.length === 0) return null;
    else {
      this.outputStack.pop();
    }
  }

  peek() {
    if (this.outputStack.length !== 0) {
      return this.outputStack[this.outputStack.length - 1];
    } else {
      if (this.inputStack.length === 0) return null;
      else return this.inputStack[0]
    }
  }

  print() {
    let accumulatorString = ''
    for(let i = this.outputStack.length - 1; i >= 0; i --) {
      accumulatorString += this.outputStack[i] + ', '
    }
    for (let i = 0; i < this.inputStack.length; i ++) {
      accumulatorString += this.inputStack[i] + ', '
    }
    console.log('Queue: ', accumulatorString)
  }

  _dump() {
    while (this.inputStack.length !== 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
}


// TESTING

const queue = new Queue();
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
queue.print();
console.log(queue.peek());