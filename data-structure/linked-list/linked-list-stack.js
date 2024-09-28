import { LinkedList } from "./linked-list-optimized.js";

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  // Add element to the first of list
  push(value) {
    this.list.prepend(value);
  }

  // Remove the first element
  pop() {
    return this.list.removeFromFront();
  }

  // Get the first element
  peek() {
    return this.list.head.value;
  }

  // Get the last element
  last() {
    return this.list.tail.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  // Get the size of queue
  getSize() {
    return this.list.getSize();
  }

  // Print all value of array
  print() {
    this.list.print();
  }
}

const list = new LinkedListStack();
list.push(10);
list.push(15);
list.push(20);
list.push(25);
list.pop();

list.print();

console.log(list.peek());
console.log(list.last());
