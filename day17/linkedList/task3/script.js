// Task 3:Implement a Stack class with methods push (add element), pop(remove element) and peek (view the top element). 
class Stack {
    constructor() {
      this.items = [];
    }

    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    display() {
      if (this.isEmpty()) {
        console.log('Stack is empty');
        return;
      }
  
      let result = '';
      for (let i = this.items.length - 1; i >= 0; i--) {
        result += this.items[i] + ' ';
      }
  
      console.log(result.trim());
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.display(); 
  
  console.log(stack.peek()); 
  
  stack.pop();
  stack.display(); 
  
  console.log(stack.peek()); 
  
  stack.pop();
  stack.pop();
  stack.display(); 
  
  console.log(stack.peek()); 
  
