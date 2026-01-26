//program to remove duplicate in linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function insertElement(head, elm) {
  let node = new Node(elm);
  if (head === null) {
    return node;
  }
  let start = head;

  while (start.next !== null) {
    start = start.next;
  }
  start.next = node;

  return head;
}

let head = null;

head = insertElement(head, 1);
head = insertElement(head, 1);
head = insertElement(head, 2);
head = insertElement(head, 2);
head = insertElement(head, 3);
head = insertElement(head, 4);

function findDuplicate(head) {
  let start = head;

  while (start !== null&&start.next!==null) {
    if (start.data === start.next.data) {
      start.next = start.next.next;
    } else {
      start = start.next;
    }
  }

  return head;
}

head = findDuplicate(head);

let print = head;
while (print !== null) {
  console.log(print.data);
  print = print.next;
}
