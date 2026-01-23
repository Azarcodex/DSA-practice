//remove nth node from end of list

import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5, 6];

let listNode = toLinkedList(arr);

// function removefromEnd(listNode, pos) {
//   let dummy = new Node(-1);
//   dummy.next = listNode;
//   let slow = dummy;
//   let fast = dummy;

//   for (let i = 0; i <= pos; i++) {
//     fast = fast.next;
//   }
//   while (fast !== null) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;

//   return dummy.next;
// }

// middle of the node

function findMiddle(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

// listNode = removefromEnd(listNode, 3);

// let res = printingNode(listNode);
let res = findMiddle(listNode);
console.log(res);
