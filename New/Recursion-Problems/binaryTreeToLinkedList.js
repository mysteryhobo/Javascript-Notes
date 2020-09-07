// https://www.geeksforgeeks.org/convert-a-given-binary-tree-to-doubly-linked-list-set-4/
// Convert a given Binary Tree to Doubly Linked List | Set 4
// Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place.
// The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL.
// The order of nodes in DLL must be same as Inorder of the given Binary Tree.
// The first node of Inorder traversal (left most node in BT) must be head node of the DLL.


const convert = (root) => {
  if (root.left) {
    convert(root.left);
    const left = root.left;
    while (left.right) {
      left = left.right;
    }
    left.right = root;
    root.left = left;
  }

  if (root.right) {
    convert(root.right);
    const right = root.right;
    while (right.left) {
      right = right.left;
    }
    right.left = root;
    root.right = right;
  }
  return root;
}