class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty) return "stack is underflow";
    this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
}
