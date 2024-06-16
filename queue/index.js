class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Emplty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
  printqueue()
  {
    
    let str = ""
    for (let i = 0; i < this.queue.length; i++) {
        str+= this.queue[i] + "\n"
        
    }
    return str
  }
}

let myqueue = new Queue()
myqueue.enqueue(10)
myqueue.enqueue(50)
myqueue.enqueue(1)
console.log(myqueue.printqueue())
myqueue.dequeue()
console.log(myqueue.printqueue())