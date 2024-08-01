// Task 10: Write a recursive function to calculate the depth of a binary tree. log the result for few test cases.
class Element {
    constructor(value) {
        this.value = value;
        this.leftBranch = null;
        this.rightBranch = null;
    }
}

function findDepth(element) {
    if (element === null) {
        return 0;
    } else {
        const leftDepth = findDepth(element.leftBranch);
        const rightDepth = findDepth(element.rightBranch);
        return Math.max(leftDepth, rightDepth) + 1;
    }
}

const rootElement = new Element(1);
rootElement.leftBranch = new Element(2);
rootElement.rightBranch = new Element(3);
rootElement.leftBranch.leftBranch = new Element(4);
rootElement.leftBranch.rightBranch = new Element(5);
rootElement.rightBranch.rightBranch = new Element(6);
rootElement.leftBranch.leftBranch.leftBranch = new Element(7);


console.log(findDepth(rootElement)); // Output: 4
const singleElement = new Element(1);
console.log(findDepth(singleElement)); // Output: 1
const emptyStructure = null;
console.log(findDepth(emptyStructure)); // Output: 0
