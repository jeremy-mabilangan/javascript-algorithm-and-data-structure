class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end of array
  enqueue(element) {
    // linear time complexity
    this.items.push(element);
  }

  // Remove the first element
  dequeue() {
    // shift method has a linear time complexity
    return this.items.shift();
  }

  // Get the first element
  peek() {
    return this.items[0] || null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of queue
  size() {
    return this.items.length;
  }

  // Print all value of array
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

queue.print();
