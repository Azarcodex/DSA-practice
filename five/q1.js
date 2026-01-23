//reverse the linked list

import { printingNode, toLinkedList } from "../LINKED-LIST/utils/utils.js";

let arr = [1, 2, 3, 4, 5];

let nodelist = toLinkedList(arr);

let start = nodelist;
let prev = null;
while (start !== null) {
  let node = start.next;
  start.next = prev;
  prev = start;
  start = node;
}

let res=printingNode(prev)


console.log(res)

