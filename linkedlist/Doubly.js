class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Insertion at the beginning in a Doubly Linked List

DoublyLinkedlist.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
}

//Insertion at the End in a Doubly Linked List

DoublyLinkedlist.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data, null, this.tail);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }

  this.tail = newNode;

  if (this.head === null) {
    this.head = newNode;
  }
};

// Insertion At a given Location Doubly Linked List

DoublyLinkedlist.prototype.insertAfter = function (prevNode, data) {
  if (prevNode == null) {
    console.log("Invalid prev node");
    return;
  }

  const newNode = new Node(data, prevNode.next, prevNode);

  if (prevNode.next !== null) {
    prevNode.next.prev = newNode;
  }
  prevNode.next = newNode;

  
  if (newNode.next == null) {
    this.tail = newNode;
  }
}

// Deleting First Node in a Doubly Linked List

DoublyLinkedlist.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return; // head is null and there is nothing to delete
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

// Deleting Last Node in a Doubly Linked List

DoublyLinkedlist.prototype.deleteLastNode = function () {
  if (!this.tail) {
    console.log("DLL is empty");
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// Reversing a Doubly Linked List

DoublyLinkedlist.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current != null) {
   
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    
    current = current.prev; // moving to next node
  }
  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
