//find the middle of the linked list

let arr = [99, 100, 101, 102];

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = null;
let tail = null;
for (let i of arr) {
  let newNode = new Node(i);
  if (head === null) {
    head = tail = newNode;
  } else {
    tail.next = newNode;
    tail = newNode;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

let x = findMiddle(head);
console.log(x);
