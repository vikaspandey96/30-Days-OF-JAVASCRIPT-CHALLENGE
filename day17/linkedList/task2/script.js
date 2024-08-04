// Task 2: Implement a LinkedList  class with methods to add a node to the end, remove a node from the end and display all nodes.
class ListNode {
    constructor(data) {
      this.data = data; 
      this.nextNode = null; 
    }
  }
  
  class SimpleLinkedList {
    constructor() {
      this.headNode = null; 
    }
    append(data) {
      const newNode = new ListNode(data);
  
      if (!this.headNode) {
        this.headNode = newNode;
      } else {
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
      }
    }
  
    
    removeLast() {
      if (!this.headNode) {
        return null; 
      }
  
      if (!this.headNode.nextNode) {
        const data = this.headNode.data;
        this.headNode = null;
        return data; 
      }
  
      let currentNode = this.headNode;
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
  
      const data = currentNode.nextNode.data;
      currentNode.nextNode = null;
      return data;
    }
  
    displayAll() {
      if (!this.headNode) {
        console.log('List is empty');
        return;
      }
  
      let currentNode = this.headNode;
      let result = '';
  
      while (currentNode) {
        result += currentNode.data + ' -> ';
        currentNode = currentNode.nextNode;
      }
  
      result += 'null';
      console.log(result);
    }
  }
  

  const linkedList = new SimpleLinkedList();
  linkedList.append(10);
  linkedList.append(20);
  linkedList.append(30);
  linkedList.displayAll(); 
  
  linkedList.removeLast();
  linkedList.displayAll();
  
  linkedList.removeLast();
  linkedList.displayAll(); 

  
  linkedList.removeLast();
  linkedList.displayAll(); 



  
