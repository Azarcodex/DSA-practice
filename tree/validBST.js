let arr = [3, 2, 1, 5, 7, 11];

class BST {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function Insert(root, val) {
  if (root === null) {
    return new BST(val);
  } else if (val < root.val) {
    root.left = Insert(root.left, val);
  } else if (val > root.val) {
    root.right = Insert(root.right, val);
  }
  return root;
}

let root = null;
for (let i of arr) {
  root = Insert(root, i);
}

// console.log(ArrtoBST(arr));

function ValidBST(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  }

  let left = ValidBST(root.left, min, root.val);
  let right = ValidBST(root.right, root.val, max);

  return left && right;
}

console.log(ValidBST(root));
