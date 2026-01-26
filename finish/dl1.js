//find the middle of the doubly linked list

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

let head = null;

function insertData(head, value) {
  let node = new Node(value);
  if (head === null) {
    return node;
  }

  let start = head;
  while (start.next !== null) {
    start = start.next;
  }
  start.next = node;
  node.prev = start;

  return head;
}

head = insertData(head, 1);
head = insertData(head, 2);
head = insertData(head, 3);
head = insertData(head, 4);

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

let elm = findMiddle(head);
console.log(elm);
