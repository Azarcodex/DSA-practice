//reverse linked list left and right

let arr = [1, 2, 3, 4, 5];

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

function rotate(head, left, right) {
  let dummy = new Node(-1);
  dummy.next = head;
  let start = dummy;
  for (let i = 1; i < left; i++) {
    start = start.next;
  }
  let curr = start.next;
  let next = null;

  for (let i = 0; i < right - left; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = start.next;
    start.next = next;
  }

  return dummy.next;
}

head = rotate(head, 2, 4);

let print = head;
while (print !== null) {
  console.log(print.data);
  print = print.next;
}
