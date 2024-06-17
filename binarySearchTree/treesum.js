// breadth first search 

const treeSumBFS = (root) => {
    if (root === null) {
        return 0
    }

    const queue = [root]
    let sum = 0

    while (queue.length > 0) {
        const node = queue.shift()
        sum += node
        if (node.left !== null) {
            queue.push(node.left)

        }
        if (node.right !== right) {
            queue.push(node.right)
        }
    }
}


// using DFS

const treeSumDFS = (root) => {
    if (root === null){
        return 0
    }
    return root.key + treeSumDFS(root.left) +treeSumDFS(root.right)
}