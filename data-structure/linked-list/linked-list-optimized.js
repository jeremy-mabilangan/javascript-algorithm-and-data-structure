class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  /**
   * Add to the start of list
   */
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;

    // Time Complexity - Constant
  }

  /**
   * Add element to the end of list
   */
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;

    // Time Complexity - Constant
  }

  /**
   * Remove the first node
   *
   * @returns The removed value
   */
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    return value;

    // Time Complexity - Constant
  }

  /**
   * Remove the last node
   *
   * @returns The last value
   */
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;

    // Time Complexity - Linear
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    if (value === "") {
      return -1;
    }

    let curr = this.head;
    let index = 0;

    while (curr) {
      if (curr.value === value) return index;
      curr = curr.next;
      index++;
    }

    return -1;

    // Time Complexity - Linear
  }

  /**
   * Print the value of list
   */
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }

    // Time Complexity - Linear
  }
}

// const list = new LinkedList();

// console.log(list.isEmpty());
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.append(0);
// list.print();
// console.log(`List size = ${list.getSize()}`);

// console.log(`Search = ${list.search(10)}`);
// console.log(`Search = ${list.search(0)}`);
// console.log(`Search = ${list.search(5)}`);

// list.print();

// list.removeFromFront();
// list.removeFromEnd();

// list.print();
