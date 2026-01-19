import { Node, printingNode, toLinkedList } from "./utils/utils.js";

let arr = [1, 2, 3, 4, 5];

let listNode = toLinkedList(arr);

//to reverse it

function Nreverse(head, left, right) {
  let dummy = new Node(0);

  dummy.next = head;

  let prev = dummy;

  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  let curr = prev.next;
  let next = null;

  for (let i = 0; i < right - left; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}

listNode = Nreverse(listNode, 2, 4);

let res = printingNode(listNode);
console.log(res);
