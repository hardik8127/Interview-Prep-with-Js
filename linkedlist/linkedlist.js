class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
}

// Insertion At Start of a Linked List

linkedList.prototype.insertAtBegining = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

// Insertion at the End of a Linked List
linkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }

  last.next = newNode;
};

//Insertion at a given location in a Linked List
linkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("prev cannot be null");
    return;
  }
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};
// Traversing or Printing a Linked List

linkedList.prototype.printList = function () {
  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }
  console.log(listValues.join("->"));
};

// Delete First Node of a Linked List
linkedList.prototype.deleteFirstNode = function () {
  if (this.head === null) {
    return;
  }
  this.head = this.head.next;
};

// Delete Last Node of a Linked List
linkedList.prototype.deleteLastNode = function () {
  if (this.head === null) {
    return;
  }
  if (this.head.next === null) {
    this.head = null;
    return;
  }
  let secondLast = head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

// Delete by key or at a given location in Linked List

linkedList.prototype.deleteByKey = function (key) {
  if (this.head === null) {
    console.log("list is empty");
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  while (current.next !== null) {
    if (current.next.data == key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("no key found");
};

// Search In a Linked List\
linkedList.prototype.search = function(key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
  }
return false
}

// Reversing a Linked List
linkedList.prototype.reverse = function(){
  let current = this.head
  prev = null
  next = null
  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
    
  }
  this.head = prev
}

// Implementation
const newList = new linkedList();
newList.insertAtBegining(1);
newList.insertAtEnd(2);
newList.insertAtEnd(3);
newList.insertAtEnd(4);
newList.insertAtEnd(9);
newList.insertAtEnd(7);
newList.printList()
newList.search(4)

