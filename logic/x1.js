import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5];

let list = toLinkedList(arr);

function reversePos(head, count) {
  let length = 0;
  let counting = head;
  while (counting) {
    counting = counting.next;
    length++;
  }
  let dummy = new Node(0);
  dummy.next = head;
  let start = dummy;

  for (let i = 1; i < count; i++) {
    start = start.next;
  }
  let curr = start.next;
  let next = null;
  for (let i = 0; i < length - count; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = start.next;
    start.next = next;
  }
  return dummy.next;
}

list = reversePos(list, 3);

let str = printingNode(list);
console.log(str);
