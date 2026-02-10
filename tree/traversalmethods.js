export function preOrder(node) {
  if (node === null) return;

  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right);
}

export function postOrder(node) {
  if (node === null) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

export function InorderTraversal(node) {
  if (node === null) return;

  InorderTraversal(node.left);
  console.log(node.value);
  InorderTraversal(node.right);
}
