class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  // Add element
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;

      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  // Remove the first element
  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.items[this.front];

    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  // Get the first element
  peek() {
    return this.items[this.front] || null;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.currentLength === 0;
  }

  // Get the size of queue
  size() {
    return this.currentLength;
  }

  // Print all value of array
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(this.items);
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.isFull());
console.log(queue.peek());
console.log(queue.isEmpty());

queue.print();
console.log(queue.size());

console.log(queue.dequeue());
console.log(queue.dequeue());

queue.print();
console.log(queue.size());

queue.enqueue(1);
queue.print();
