class Queue {
  constructor() {
    this.itens = [];
  }

  enqueue(element) {
    this.itens.push(element);
  }

  dequeue() {
    this.itens.shift();
    this.itens.filter((n) => n);
  }

  peek() {
    return this.itens[0];
  }

  size() {
    return this.itens.length;
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  clean() {
    this.itens = [];
  }
}
