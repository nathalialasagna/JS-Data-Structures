class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export default class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (element === current.element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  //add element to the tail
  push(element) {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  //add a list of elements to de Linked List
  addList(elementList) {
    for (let e in elementList) {
      this.push(elementList[e]);
    }
  }

  //add element to any positon
  insert(element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element);

      // if index is 0
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        let current = this.head;
        for (let i = 0; i < index - 1 && node != null; i++) {
          current = current.next;
        }
        const previous = current;
        current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count++;
    } else {
      return console.log("index not valid");
    }
  }

  //remove element to any positon
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      // if index is 0
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;

        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return true;
    }
    return false;
  }

  printElements() {
    let current = this.head;

    while (current != null) {
      console.log(current.element);
      current = current.next;
    }
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }
}

//const ll = new LinkedList();
//ll.push("2");
//ll.push("6");
//ll.push("12");
//ll.push(40);
//ll.insert(23, 1);
//ll.remove(3);
//ll.printElements();
