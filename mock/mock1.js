//reverse the Linked List in the left and right nodes

import {
  printingNode,
  toLinkedList,
  Node,
} from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5];

let head = toLinkedList(arr);

function reverseX(head, left, right) {
  let mock = new Node(-1);
  mock.next = head;
  let start = mock;
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
  return mock.next;
}

head = reverseX(head, 2, 4);

let str = printingNode(head);

console.log(str);
