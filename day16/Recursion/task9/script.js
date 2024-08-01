// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}

function traverseInOrder(node) {
    if (node !== null) {
        traverseInOrder(node.leftChild);
        console.log(node.data);
        traverseInOrder(node.rightChild);
    }
}
const rootNode = new Node(10);
rootNode.leftChild = new Node(5);
rootNode.rightChild = new Node(15);
rootNode.leftChild.leftChild = new Node(3);
rootNode.leftChild.rightChild = new Node(7);
rootNode.rightChild.leftChild = new Node(12);
rootNode.rightChild.rightChild = new Node(18);
traverseInOrder(rootNode)
