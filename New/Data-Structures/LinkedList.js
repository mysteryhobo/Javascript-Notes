class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      node = node.next;
      size ++;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return this.head = null;

    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }

    currNode.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (!last) return this.head = new Node(data);
    else return last.next = new Node(data);
  }

  getAt(i) {
    let currentNode = this.head;
    while (i > 0) {
      if (!currentNode) return null;
      currentNode = currentNode.next;
      i --;
    }

    return currentNode;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) { this.head = this.head.next; return;}
    const previousNode = this.getAt(index - 1);
    if (previousNode && previousNode.next) return previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    if (index === 0) return this.head = new Node(data, this.head);
    const previousNode = this.getAt(index - 1);
    if (previousNode) {
      const newNode = new Node(data, previousNode.next);
      previousNode.next = newNode;
    } else {
      this.insertLast(data)
    }
  }

  forEach(fn) {
    let currNode = this.head;
    while (currNode) {
      fn(currNode);
      currNode = currNode.next;
    }
  }
}
// const l = new LinkedList();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);

// l.getAt(0).data

module.exports = { Node, LinkedList }