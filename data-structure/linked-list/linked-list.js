class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Add to the first of list
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // Add to the last of list
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    }

    this.size++;
  }

  // Insert with provided index
  insert(value, index) {
    if (index < 0 || index >= this.size || index === undefined) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let j = 0; j < index - 1; j++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  // Remove with provided value
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let head = this.head;
    while (head.value !== value) {
      head = head.next;
    }

    head.next = head.next;
    this.size--;

    return value;
  }

  // Remove with provided index
  removeFrom(index) {
    if (this.isEmpty()) {
      return null;
    }

    if (index < 0 || index >= this.size || index === undefined) {
      return null;
    }

    let removedNode;

    if (index > 0) {
      let prev = this.head;

      for (let j = 0; j < index - 1; j++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = prev.next.next;
    } else {
      removedNode = this.head;
      this.head = this.head.next;
    }

    this.size--;

    return removedNode.value;
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
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    }

    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

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
      console.log(JSON.stringify(this.head));
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(0);
list.print();
console.log(`List size = ${list.getSize()}`);
list.insert(15, 2);
list.print();
console.log(`List size = ${list.getSize()}`);

console.log(`Removed from ${list.removeFrom(2)}`);
console.log(`Removed value ${list.removeValue(30)}`);
list.print();
console.log(`List size = ${list.getSize()}`);

console.log(`Removed value ${list.removeValue(20)}`);
list.insert(5, 1);
list.print();
console.log(`List size = ${list.getSize()}`);

console.log(`Search = ${list.search(10)}`);
console.log(`Search = ${list.search(5)}`);
console.log(`Search = ${list.search(0)}`);

list.reverse();
list.print();
