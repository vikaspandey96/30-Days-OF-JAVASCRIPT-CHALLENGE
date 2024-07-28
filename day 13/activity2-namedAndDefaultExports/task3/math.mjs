// Task 3:Create a module that exports multiple functions using named exports. Import and use there functions in another script.
export function addNumber(a, b) {
    return a + b;
  }
  
  export function subtractNumber(a, b) {
    return a - b;
  }
  
  export function multiplyNumber(a, b) {
    return a * b;
  }
  
  export function divideNumber(a, b) {
    if (b === 0) {
      throw new Error('it cannot be divide by zero ');
    }
    return a / b;
  }
  
