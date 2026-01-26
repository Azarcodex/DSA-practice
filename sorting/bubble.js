let arr = [0, 5, 3, 1, 5, 32, 1, 2];
import {
  Node,
  printingNode,
  toLinkedList,
} from "../LINKED-LIST/utils/utils.js";

let head = toLinkedList(arr);

//in arrays
// function bubbleSort(arr, n) {
//   for (let i = 0; i < n; i++) {
//     let swap = false;
//     for (let j = 0; j < n - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swap = true;
//       }
//     }
//     if (swap === false) {
//       break;
//     }
//   }
//   return arr
// }

// let res=bubbleSort(arr,arr.length-1)

function linkedBubbleSort(head) {
  let swapped;

  do {
    let current = head;
    swapped = false;
    while (current.next !== null) {
      if (current.data > current.next.data) {
        let temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;
        swapped = true;
      }

      current = current.next;
    }
  } while (swapped);

  return head;
}

head = linkedBubbleSort(head);

let res = printingNode(head);
console.log(res);
