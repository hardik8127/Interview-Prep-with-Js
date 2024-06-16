class Stack {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(elements) {
    return this.stack.includes(elements);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str = this.stack[i] + "\n";
      return str;
    }
   
  }
}
let myStack = new Stack()
myStack.push(2)
myStack.push(5)
myStack.push(10)
myStack.pop()
console.log(myStack.printStack())