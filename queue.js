'use strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first===null) {
      this.first = node;
    }  

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;
    node.prev.next = null;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function peek(q) {
  if (q.first === null) {
    console.log('The queue is empty!');
    return;
  }
  return q.first.value;
}

function display(q) {
  let node = q.first;

  if (node === null) {
    console.log('The queue is empty!');
    return;
  }

  while (node !== null) {
    console.log(node.value);
    node = node.prev; 
  }
}

function main() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  starTrekQ.enqueue('Spock');
  // starTrekQ.dequeue();

  // console.log(peek(starTrekQ));
  console.log(display(starTrekQ));
  // return starTrekQ;
}

console.log(main());