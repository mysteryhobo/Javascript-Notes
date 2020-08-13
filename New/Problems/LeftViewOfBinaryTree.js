//https://www.geeksforgeeks.org/print-left-view-binary-tree/
//Given a Binary Tree, print left view of it. Left view of a Binary Tree is set of nodes visible when tree is visited from left side.

//Solution: Get the first of each row of the tree by using a modified BFS


function getLeftView(root) {
  const queueOfNodes = [root, 'rowEnd']
  const result = []

  while(queueOfNodes.length > 0) {
    if (queueOfNodes[0] === 'rowEnd') {
      queueOfNodes.shift();
      result.push(queueOfNodes.shift())
    }
  }

  return result;
}