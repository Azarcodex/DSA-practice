//preorder,post order and Inorder traversal

import { InorderTraversal, postOrder, preOrder } from "./traversalmethods.js";

class BST {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


function insert(node,val)
{
    if(node===null)
    {
        return new BST(val)
    }
    else if(val<node.value)
    {
        node.left=insert(node.left,val)
    }
    else if(val>node.value)
    {
        node.right=insert(node.right,val)
    }
    return node
}



let root=null

root=insert(root,4)
root=insert(root,2)
root=insert(root,1)
root=insert(root,6)
root=insert(root,8)

preOrder(root)

console.log("--------")

postOrder(root)

console.log("--------")

InorderTraversal(root)