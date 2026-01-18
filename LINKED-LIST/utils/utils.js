export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export function toLinkedList(arr) {
  let head = null;
  let tail = null;
  for (let i of arr) {
    let node = new Node(i);
    if (head === null) {
      head = tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }
  return head;
}

export function printingNode(head) {
  let str = "";
  while (head !== null) {
    str += head.data;
    if (head.next !== null) {
      str += "- >";
    }
    head=head.next
  }
  return str;
}
