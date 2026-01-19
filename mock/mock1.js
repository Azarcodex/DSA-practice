//mergesorted

import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

let listNode1 = toLinkedList(arr1);
let listNode2 = toLinkedList(arr2);

function mergesorted(listNode1, listNode2) {
  let dummy = new Node(0);
  let curr = dummy;
  while (listNode1 !== null && listNode2 !== null) {
    if (listNode1.data < listNode2.data) {
      curr.next = listNode1;
      listNode1 = listNode1.next;
    } else {
      curr.next = listNode2;
      listNode2 = listNode2.next;
    }
    curr = curr.next;
  }
  if (listNode1 !== null) curr.next = listNode1;

  if (listNode2 !== null) curr.next = listNode2;

  return dummy.next;
}

let data = mergesorted(listNode1, listNode2);
//printing list
let res = printingNode(data);
console.log(res);
