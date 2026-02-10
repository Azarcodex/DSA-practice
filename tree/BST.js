//Insertion,Searching and Deletion

import { Deletion } from "./Deletion.js";

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function Insertion(node, value) {
  if (node === null) {
    return new BST(value);
  } else if (value < node.value) {
    node.left = Insertion(node.left, value);
  } else if (value > node.value) {
    node.right = Insertion(node.right, value);
  }
  return node;
}

function Searching(node, value) {
  if (node === null) return false;
  if (value === node.value) return true;
  else if (value < node.value) {
    return Searching(node.left, value);
  } else if (value > node.value) {
    return Searching(node.right, value);
  }
}

let root = null;

root = Insertion(root, 4);
root = Insertion(root, 6);
root = Insertion(root, 4);
root = Insertion(root, 2);
root = Insertion(root, 23);

console.log(root)

root=Deletion(root,6)

console.log(root)


