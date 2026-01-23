//reverse the linked with left and right

//remove nth node from end of list

import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5, 6];

let listNode = toLinkedList(arr);

function reverseList(head, left, right) {
  let dummy = new Node(-1);
  dummy.next = head;

  let start = dummy;

  for (let i = 1; i < left; i++) {
    start = start.next;
  }
  let curr = start.next;
  let next = null;
  for (let i = 0; i < right - left; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = start.next;
    start.next = next;
  }
  return dummy.next;
}

listNode = reverseList(listNode, 2, 4);

let res = printingNode(listNode);
console.log(res);
