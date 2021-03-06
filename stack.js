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
    console.log('stack is empty');
    return null;
  }

  const node = stack.top;
  return node.data;
} 

function display(stack) {
  if (stack.top===null){
    console.log('stack is empty');
    return null;
  }
  let node = stack.top;
  while(node!==null) {
    console.log(node.data);
    node = node.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();
  const reverseStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  for (let i = s.length; i >= 0; i--) {
    console.log(i);
    reverseStack.push(s[i]);
  }

  let node1 = stack.top;
  let node2 = reverseStack.top;
  while (node1.data === node2.data && node1.next !== null) {
    node1 = node1.next;
    node2 = node2.next;
  }
  if (node1.data !== node2.data) {
    return false;
  }
  return true;
}

// true, true, true
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// function matchingParentheses(expression) {
//   //take an aritmetic expression
//   //if expression has an extra close, return location of extra close
//   //if express has extra open, return location of open

//   const stack = new Stack();
//   for (let i = 0; i < expression.length; i++) {
//     stack.push(expression[i])
//   }
  
//   //keep track of open ps
//   let openParenthesis = 0;
//   let closedParenthesis = 0;
//   let node = stack.top

//   while(node.next !== null) {
//     console.log(node.data)
//     node = node.next
//     if(node.data === '('){
//       openParenthesis++
//     } else if (node.data === ')') {
//       closedParenthesis++
//     }
//   }
//   if (openParenthesis !== closedParenthesis){
//     return 'Missing a parenthesis'
//   } else {
//     console.log('open', openParenthesis)
//     console.log('closed', closedParenthesis)
//     return 'true'
//   }
// }

// console.log(matchingParentheses("1+(1+2))"));

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

// console.log(main());
module.exports = Stack;