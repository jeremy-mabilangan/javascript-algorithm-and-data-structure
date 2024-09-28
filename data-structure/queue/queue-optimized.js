class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  // Add element to the end of queue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Remove the first element
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  // Get the first element
  peek() {
    return this.items[this.front] || null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.rear - this.front === 0;
  }

  // Get the size of queue
  size() {
    return this.rear - this.front;
  }

  // Print all value of array
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());

console.log(queue.dequeue());

queue.print();
