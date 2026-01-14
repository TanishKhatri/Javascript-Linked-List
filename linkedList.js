
class LinkedList {
  headNode;

  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode === null) {
      this.headNode = new Node();
      this.headNode.value = value;
      return;
    }

    let travelNode = new Node();
    travelNode.nextNode = this.headNode;

    while(travelNode.nextNode !== null) {
      travelNode = travelNode.nextNode;
    }

    let newNode = new Node();
    newNode.value = value;
    travelNode.nextNode = newNode;
  }

  prepend(value) {
    let newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  size() {
    let sizeCount = 0;
    let travelNode = new Node();
    travelNode.nextNode = this.headNode;

    while(travelNode.nextNode !== null) {
      sizeCount++;
      travelNode = travelNode.nextNode;
    }

    return sizeCount;
  }

  head() {
    if (this.headNode === null) {
      return undefined;
    }

    return this.headNode.value;
  }

  tail() {
    if (this.headNode === null) {
      return undefined;
    }

    let travelNode = new Node();
    travelNode = this.headNode;

    while(travelNode.nextNode !== null) {
      travelNode = travelNode.nextNode;
    }

    return travelNode.value;
  }

  at(index) {
    if (this.headNode === null) {
      return undefined;
    }

    let travelNode = new Node();
    travelNode = this.headNode;

    for (let i = 0; (i < index) && (travelNode !== null); i++) {
      travelNode = travelNode.nextNode;
    }

    if (travelNode === null) {
      return undefined
    } else {
      return travelNode.value;
    }
  }

  pop() {
    if (this.headNode === null) {
      return undefined;
    }

    let nodeHead = this.headNode;
    this.headNode = this.headNode.nextNode;

    return nodeHead.value;
  }

  contains(value) {
    if (this.headNodeNode === null) {
      return false;
    }

    let travelNode = new Node();
    travelNode.nextNode = this.headNode;

    while(travelNode.nextNode !== null) {
      travelNode = travelNode.nextNode;
      if (travelNode.value === value) return true;
    }

    return false;
  }

  findIndex(value) {
    if (this.headNode === null) {
      return -1;
    }

    let index = 0;
    let travelNode = new Node();
    travelNode.nextNode = this.headNode;

    while(travelNode.nextNode !== null) {
      travelNode = travelNode.nextNode;
      if (travelNode.value === value) return index;
      index++;
    }

    return -1;
  }

  insertAt(index, ...values) {

    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of Range");
    }

    let travelNode = new Node();
    travelNode.nextNode = this.headNode;

    for (let i = 0; i < index; i++) {
      travelNode = travelNode.nextNode;
    }

    let connectingNode = travelNode.nextNode;

    let prevNode = new Node();
    prevNode.value = values[0];

    if (index === 0) {
      this.headNode = prevNode;
    }

    travelNode.nextNode = prevNode;

    for (let i = 1; i < values.length; i++) {
      let node = new Node();
      node.value = values[i];
      prevNode.nextNode = node;
      prevNode = node;
    }

    prevNode.nextNode = connectingNode;
  }

  removeAt(index) {
    if (index < 0 || index > this.size() - 1) {
      throw new RangeError("Index out of Range");
    } else if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let travelNode = this.headNode;
    for (let i = 0; i < index - 1; i++) {
      travelNode = travelNode.nextNode;
    }

    let prevNode = travelNode;
    let nextNode = travelNode.nextNode.nextNode;

    prevNode.nextNode = nextNode;
  }

  toString() {
    if (this.headNode === null) {
      return "";
    }

    let listString = "";
    let travelNode = this.headNode;
    while(travelNode !== null) {
      listString += `( ${travelNode.value} ) -> `;
      travelNode = travelNode.nextNode;
    }

    listString += " null";

    return listString;
  }
}

class Node {
  value;
  nextNode;

  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export {LinkedList};