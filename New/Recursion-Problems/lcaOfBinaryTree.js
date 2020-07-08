/*
Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor.
source: https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/


assumptions:
is its a binary search tree? - No
sorted in anyway? - No
values given are the values not the actualy nodes (no access to parents)
func(root, v1, v2);
*/



function findLCA(node, v1, v2) {
  if (!node) return null;
  else if (node.value === v1 || node.value === v2) return node;
  else {
    const left = findLCA(node.left, v1, v2);
    const right = findLCA(node.right, v1, v2);
    if (left && right) return node;
    return left || right;
  }
}
