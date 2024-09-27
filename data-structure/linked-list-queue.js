import { LinkedList } from "./linked-list-optimized.js";

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  // Add element to the end of list
  enqueue(value) {
    this.list.append(value);
  }

  // Remove the first element
  dequeue() {
    return this.list.removeFromFront();
  }

  // Get the first element
  peek() {
    return this.list.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.list.isEmpty();
  }

  // Get the size of queue
  size() {
    return this.list.getSize();
  }

  // Print all value of list
  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());
console.log(queue.size());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());

queue.print();
