// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }
//   pop() {
//     this.items.pop();
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (this.isEmpty) return "stack is underflow";
//     this.items[this.items.length - 1];
//   }
//   size() {
//     return this.items.length;
//   }
// }

class Queue {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(elm) {
    this.q2.push(elm);

    while (this.q1.length !== 0) {
      this.q2.push(this.q1.shift());
    }
    [this.q1,this.q2]=[this.q2,this.q1]
  }
  
}
