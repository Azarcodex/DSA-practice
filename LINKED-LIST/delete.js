import { printingNode, toLinkedList } from "./utils/utils.js";

let arr = [1, 2, 3, 4, 5];
//delete 4th node

let head = toLinkedList(arr);

function deleteNode(head, pos) {
  let start = head;
  let count = 1;

  while (start !== null && count < pos - 1) {
    start = start.next;
    count++;
  }
  start.next = start.next.next;

  return head;
}
head = deleteNode(head, 4);

let str = printingNode(head);

console.log(str);
