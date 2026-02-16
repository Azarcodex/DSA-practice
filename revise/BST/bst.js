//searching,insertion and deletion

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

  if (value < node.value) {
    return Searching(node.left, value);
  } else if (value > node.value) {
    return Searching(node.right, value);
  }
}

function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}

function Deletion(node, value) {
  if (node === null) return null;
  if (value < node.value) {
    node.left = Deletion(node.left, value);
  } else if (value > node.value) {
    node.right = Deletion(node.right, value);
  } else {
    if (node.left === null && node.right === null) {
      return null;
    }
    if (node.left === null) {
      return node.right;
    }
    if (node.right === null) {
      return node.left;
    }

    let sucessor = findMin(node.right);
    node.value = sucessor.value;
    node.right = Deletion(node.right, sucessor.value);
  }
  return node;
}

function ValidBST(node, min = -Infinity, max = Infinity) {
  if (node === null) return true;

  if (node.val <= min || node.val >= max) {
    return false;
  }
  let left = ValidBST(node.left, min, node.val);
  let right = ValidBST(node.right, node.val, max);
  return left && right;
}

let root = null;

root = Insertion(root, 10);
root = Insertion(root, 4);
root = Insertion(root, 5);
root = Insertion(root, 7);
root = Insertion(root, 43);

// root = Deletion(root, 5);
function sort(root) {
  let res = [];
  function Inorder(root) {
    if (root === null) return;
    Inorder(root.left);
    res.push(root.value);
    Inorder(root.right);
  }
  Inorder(root);
  return res;
}

//closest value

function closestValue(node, target) {
  let current = node;
  let closest = node.value;

  while (current !== null) {
    if (Math.abs(current.value - target) < Math.abs(closest - target)) {
      closest = current.value;
    } else if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      return current.value;
    }
  }
  return closest;
}
console.log(root);
console.log(closestValue(root, 6));
