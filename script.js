class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next == null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    console.log("pop() :", current);
    return current;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    return null;
  }

  contains(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
      index++;
    }
    return false;
  }

  toString() {
    let output = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      output += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    output += "null";

    return output;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

// Node 1 -> Node 2
node1.next = node2;
// Node 2 -> Node 3
node2.next = node3;
// Node 3 -> Node 4
node3.next = node4;
// Node 4 -> Node 5
node4.next = node5;

const list = new LinkedList(node1);
console.log(list.contains(17));
console.log(list.toString());
