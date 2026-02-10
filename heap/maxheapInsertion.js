// insertion and deletion in Heap

class Heap {
  constructor() {
    this.heap = [];
  }
  Insert(elm) {
    this.heap.push(elm);
    this.HeapifyUp();
  }
  //Insertion heapifyUp checking
  HeapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentElm = Math.floor((index - 1) / 2);

      if (this.heap[index] > this.heap[parentElm]) {
        [this.heap[index], this.heap[parentElm]] = [
          this.heap[parentElm],
          this.heap[index],
        ];
      } else {
        break;
      }
      index = parentElm;
    }
  }

  //deleting

  remove() {
    if (this.heap.length === null) return null;

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    this.heap[0] = this.heap.pop();
    this.HeapifyDown();
  }

  HeapifyDown() {
    let index = 0;
    let longest = index;
    let length = this.heap.length;

    while (true) {
      let leftChild = 2 * index + 1;
      let rightChild = 2 * index + 2;
      if (leftChild < length && this.heap[leftChild] > this.heap[longest]) {
        longest = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] > this.heap[longest]) {
        longest = rightChild;
      }

      if (longest === index) break;

      [this.heap[index], this.heap[longest]] = [
        this.heap[longest],
        this.heap[index],
      ];
      index = longest;
    }
  }
}

let heap = new Heap();

heap.Insert(5);
heap.Insert(8);
heap.Insert(20);
heap.Insert(10);

console.log(heap.heap);

// heap.remove();

// console.log(heap.heap);
