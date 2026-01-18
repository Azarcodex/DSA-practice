import { printingNode, toLinkedList } from "./utils/utils.js";

let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

let listNode1 = toLinkedList(arr1);
let listNode2 = toLinkedList(arr2);

let curr = listNode1;

while (curr.next !== null) {
  curr = curr.next;
}
curr.next = listNode2;

let res=printingNode(listNode1)
console.log(res)