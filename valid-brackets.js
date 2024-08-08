class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "No elements in Stack";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  
    toString() {
      return this.items.join(" ");
    }
  }
  
  function isValidBrackets(s) {
    const stack = new Stack();
    const bracketPairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (let char of s) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.isEmpty() || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
    return stack.isEmpty();
  }
  
  let stack = new Stack();
  stack.push("(");
  stack.push("{");
  stack.push("[");
  console.log(stack.toString());
  console.log(stack.peek());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.toString());
  console.log(stack.isEmpty());
  console.log(stack.size());
  stack.clear();
  console.log(stack.toString());
  console.log(stack.isEmpty());
  
  console.log(isValidBrackets("()"));
  console.log(isValidBrackets("()[]{}"));
  console.log(isValidBrackets("]"));
  console.log(isValidBrackets("[)]")); 
  console.log(isValidBrackets("}[]{"));
