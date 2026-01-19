import { Node, printingNode, toLinkedList } from "./utils/utils.js";

let arr = [1, 2, 3, 4, 5];

let left = 2,
  right = 4;

let listNode = toLinkedList(arr);

//to reverse it

function reverseNode(head) {
  let prev = null;
  let start = head;

  while (start !== null) {
    let node = start.next;
    start.next = prev;
    prev = start;
    start = node;
  }
  return prev
}

listNode=reverseNode(listNode)

let res=printingNode(listNode)
console.log(res)
