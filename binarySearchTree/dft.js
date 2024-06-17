// class Node {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

const depthFirsttraversal = (root) =>{
    if (root === null) {
        return null
    }
    const values = []
    const stack = [root]

    while (stack.length > 0) {
        const node = stack.pop()
        values.push(node.key)

        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return values

}