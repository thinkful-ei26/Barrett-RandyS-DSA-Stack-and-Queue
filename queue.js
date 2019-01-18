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
    const node = new _Node(data)
    if (this.first===null) {
      this.first = node
    }  

    if (this.last) {
      node.next = this.last
      this.last.prev = node
    }
    this.last = node
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first
    this.first = node.prev
    node.prev.next = null

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }
}

function main() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  starTrekQ.enqueue('Spock')
  starTrekQ.dequeue();

  return starTrekQ;

  // console.log(starTrekQ);
}

console.log(main());