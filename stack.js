'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }
}

function peek(stack) {
  if (stack.top===null){
    console.log('stack is empty')
    return null
  }

  const node = stack.top
  return node.data
} 

function display(stack) {
  if (stack.top===null){
    console.log('stack is empty')
    return null
  }
  let node = stack.top
  while(node!==null) {
    console.log(node.data)
    node = node.next
  }
}

function main() {
  const starTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  // console.log(peek(starTrek));
  starTrek.pop();
  starTrek.pop();
  display(starTrek);
}

console.log(main());
