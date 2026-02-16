//max heap

class Heap {
  constructor() {
    this.heap = [];
  }

  Insert(val) {
    this.heap.push(val);
    this.HeapifyUp();
  }

  HeapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[index] > this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [
          this.heap[parent],
          this.heap[index],
        ];
      } else {
        break;
      }
      index = parent;
    }
  }

  deletion() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    this.heap[0] = this.heap.pop();
    this.HeapifyDown();
  }
  HeapifyDown() {
    let index = 0;
    let length = this.heap.length;
    while (true) {
      let longest = index;
      let left = 2 * index + 1;
      let right = 2 * index + 2;

      if (left < length && this.heap[left] > this.heap[longest]) {
        longest = left;
      }
      if (right < length && this.heap[right] > this.heap[longest]) {
        longest = right;
      }
      if (longest === index) {
        break;
      }
      [this.heap[index], this.heap[longest]] = [
        this.heap[longest],
        this.heap[index],
      ];
      index = longest;
    }
  }
}

let heap = new Heap();

heap.Insert(10);
heap.Insert(4);
heap.Insert(3);
heap.Insert(9);
heap.deletion();
console.log(heap);
