import { Node, printingNode, toLinkedList } from "./utils/utils.js";

let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

let listNode1 = toLinkedList(arr1);
let listNode2 = toLinkedList(arr2);

let dummy = new Node(-1);
let curr = dummy;
let link1 = listNode1;
let link2 = listNode2;

while (link1 !== null && link2 !== null) {
  if (link1.data <= link2.data) {
    curr.next = link1;
    link1 = link1.next;
  } else {
    curr.next = link2;
    link2 = link2.next;
  }
  curr=curr.next
}
if(link1!==null) curr.next=link1

if(link2!==null) curr.next=link2

//printing list
let res = printingNode(dummy.next);
console.log(res);
