import { LinkedListQueue } from "../linked-list/linked-list-queue.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(value, root) {
    if (root === null || this.isEmpty()) {
      return false;
    } else {
      const _root = root || this.root;
      if (_root.value === value) {
        return true;
      } else {
        if (_root.value > value) return this.search(value, _root.left);
        if (_root.value < value) return this.search(value, _root.right);
      }
    }
  }

  // DFS
  preOrder(root) {
    if (this.isEmpty()) {
      return;
    } else {
      if (root === null) {
        return;
      } else {
        const _root = root || this.root;
        console.log(_root.value);
        this.preOrder(_root.left);
        this.preOrder(_root.right);
      }
    }
  }

  // DFS
  inOrder(root) {
    if (this.isEmpty()) {
      return;
    } else {
      if (root === null) {
        return;
      } else {
        const _root = root || this.root;
        this.inOrder(_root.left);
        console.log(_root.value);
        this.inOrder(_root.right);
      }
    }
  }

  // DFS
  postOrder(root) {
    if (this.isEmpty()) {
      return;
    } else {
      if (root === null) {
        return;
      } else {
        const _root = root || this.root;
        this.inOrder(_root.left);
        this.inOrder(_root.right);
        console.log(_root.value);
      }
    }
  }

  // BFS
  levelOrder() {
    const queue = new LinkedListQueue();
    queue.enqueue(this.root);

    while (queue.size()) {
      let curr = queue.dequeue();
      console.log(curr.value);
      if (curr.left) {
        queue.enqueue(curr.left);
      }

      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  min(root) {
    if (this.isEmpty()) {
      return null;
    }

    const _root = root || this.root;
    if (_root.left === null) {
      return _root.value;
    }

    return this.min(_root.left);
  }

  max(root) {
    if (this.isEmpty()) {
      return null;
    }

    const _root = root || this.root;
    if (_root.right === null) {
      return _root.value;
    }

    return this.max(_root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Is tree empty? " + bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(10));
bst.inOrder();

console.log(bst.min());
console.log(bst.max());

bst.delete(5);

bst.inOrder();
