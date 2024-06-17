class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
// Designing or Implementaion of Binary Search Tree

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Insertion in a Binary Search Tree
  insert(key){
    const newNode = new BSTNode(key)
    if (this.root === null) {
        this.root = newNode
    }else{
        this.insertNode(this.root, newNode)

    }
    insertNode(node, newNode)  // node means root node
    if (newNode.key < node.key) {
        if(node === null){
            node.left = newNode
        }else{
            this.insertNode(node.left, newNode)
        }
    } else{
        if (node.right === null) {
            node.rigt = newNode
        }else{
            this.insertNode(node.right, newNode)
        }
    }
  }
  
}


