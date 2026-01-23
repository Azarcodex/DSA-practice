//remove nth node from end of list

import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5,6];

let listNode = toLinkedList(arr);

// function removefromEnd(listNode, pos) {
//   let dummy = new Node(0);
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

//middle of the node

function findMiddle(head) {
  let fast = head,
    slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.data;
}

// listNode = findMiddle(listNode);

// let res = printingNode(listNode);

// console.log(res);

let res=findMiddle(listNode)
console.log(res)