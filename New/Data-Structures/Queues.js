/*******************************************************************************
Queues:
- First in First Out (a line)
- enqueue() – Adds an element to the queue (the end of the line)
- dequeue() – Removes an element from the queue (the front of the line)
- front() - Peeks the front of the queue 
*******************************************************************************/


class Queue {
  constructor () {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) return null;
    else {
      return this.items[0]
    }
  }

  isEmpty() {return this.items.length === 0}

  print() {
    let accumulator = ''
    for (let i = 0; i < this.items.length; i ++) {
      accumulator += this.items[i] + ', ';
    }
    console.log(accumulator);
  }
}

const queue = new Queue();
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30);
queue.dequeue();
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
queue.print();
console.log(queue.front());