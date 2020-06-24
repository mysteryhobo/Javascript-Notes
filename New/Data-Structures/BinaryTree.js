/*
  Generic Binary Tree implementation (Not a search tree)
*/

class BinaryTree {
  constructor (value) {
    this.root = new Node(value)
  }

  //BFS - find the next parent to insert on
  findNextEdge() {
    if (!this.root) return null;
    const queue = [this.root];

    while (queue.length > 0) {
      if (!queue[0].leftChild || !queue[0].rightChild) return queue[0];
      else {
        queue.push(queue[0].leftChild, queue[0].rightChild)
        queue.shift();
      }
    }
  }


  //pre order
  preOrderTrace() {
    function dfs(node) {
      console.log(node.value)
      if (node.leftChild) dfs(node.leftChild);
      if (node.rightChild) dfs(node.rightChild);
    }
    
    dfs(this.root);
  }

  //in-order
  inOrderTrace() {
    function dfs(node) {
      if (node.leftChild) dfs(node.leftChild);
      console.log(node.value)
      if (node.rightChild) dfs(node.rightChild);
    }
    
    dfs(this.root);
  }

  //post-order
  postOrderTrace() {
    function dfs(node) {
      if (node.leftChild) dfs(node.leftChild);
      if (node.rightChild) dfs(node.rightChild);
      console.log(node.value)
    }
    
    dfs(this.root);
  }

  // BFS + ADD
  insert(...values) {
    for (let i = 0; i < values.length; i ++) {
      const nextEdge = this.findNextEdge();
      const newLeaf = new Node(values[i]);
      if (!nextEdge.leftChild) nextEdge.leftChild = newLeaf;
      else nextEdge.rightChild = newLeaf;
    }
  }

  print() {
    if (!this.root) return null;
    const queue = [this.root];
    while (queue.length > 0) {
      console.log('|' + queue[0].value + '|');
      if (queue[0].leftChild) queue.push(queue[0].leftChild);
      if (queue[0].rightChild) queue.push(queue[0].rightChild);
      queue.shift();
    }
  }
}

class Node {
  constructor (value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}


const tree = new BinaryTree(1);
// tree.insert(2);
tree.insert(2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17);

// console.log(tree.root)

tree.print();

tree.preOrderTrace()