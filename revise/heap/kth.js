//Implement MinHeap and kth largest element

class MinHeap {
  constructor() {
    this.heap = [];
  }

  //swap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  //Insertion

  Insert(elm) {
    this.heap.push(elm);
    this.HeapifyUp();
  }
  HeapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[index] < this.heap[parent]) {
        this.swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }
  }

  //deletion
  remove() {
    if (this.heap.length === 1) return this.heap.pop();

    this.heap[0] = this.heap.pop();
    this.HeapifyDown(0);
  }
  HeapifyDown(i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let length = this.heap.length;

    if (left < length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.HeapifyDown(i);
      
    }
  }

  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
}

function kthLargest(arr, k) {
  let h = new MinHeap();
  for (let i of arr) {
    h.Insert(i);

    if (h.size() > k) {
      h.remove();
    }
  }
  return h.peek();
}

let arr = [3, 2, 1, 5, 6, 4];

console.log(kthLargest(arr, 2));
