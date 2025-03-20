
# 📚 **Week 19 Day 2 - DSA**
## 🚀 **Topics Covered**
✅ **Queue using Array**  
✅ **Stack using Linked List**  
✅ **Stack using Array**  
✅ **Leetcode Questions:**  
   - 🔹 **Implement Queue using Stack (Leetcode 232)**  
   - 🔹 **Implement Stack using Queue (Leetcode 225)**  
   - 🔹 **Valid Parentheses (Leetcode 20)**  

---

## **🛠️ Queue using Array**
A **Queue** follows the **FIFO (First-In-First-Out)** principle, meaning elements are inserted at the **rear** and removed from the **front**.  

### **📌 Operations in Queue**
✅ **enqueue** ➝ Add element to queue  
✅ **dequeue** ➝ Remove element from queue  
✅ **peek** ➝ View front element  
✅ **isEmpty** ➝ Check if queue is empty  
✅ **size** ➝ Get queue size  

### **💡 Implementation**
```javascript
class QueueArray {
    constructor() {
        this.queue = []; // Array to store queue elements
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue.shift(); // Removes first element (FIFO)
    }

    peek() {
        return this.isEmpty() ? null : this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    print() {
        console.log(this.queue);
    }
}

// ✅ Example Usage
let q = new QueueArray();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.print(); // Output: [10, 20, 30, 40]
console.log(q.dequeue()); // Output: 10
console.log(q.peek()); // Output: 20
```

---

## **🛠️ Stack using Linked List**
A **Stack** follows the **LIFO (Last-In-First-Out)** principle, meaning elements are inserted and removed from the **top**.

### **📌 Operations in Stack**
✅ **push** ➝ Add element to the top  
✅ **pop** ➝ Remove the top element  
✅ **peek** ➝ View the top element  
✅ **isEmpty** ➝ Check if stack is empty  
✅ **size** ➝ Get stack size  

### **💡 Implementation**
```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) return null;
        let poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    display() {
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log("Stack:", result.join(" -> "));
    }
}

// ✅ Example Usage:
let stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Stack: 30 -> 20 -> 10
console.log(stack.pop()); // Output: 30
stack.display(); // Stack: 20 -> 10
```

---

## **🛠️ Stack using Array**
```javascript
class StackArray {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        return this.isEmpty() ? null : this.stack.pop();
    }

    peek() {
        return this.isEmpty() ? null : this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    print() {
        console.log(this.stack);
    }
}

// ✅ Example Usage
let s = new StackArray();
s.push(10);
s.push(20);
s.push(30);
s.print(); // Output: [10, 20, 30]
console.log(s.pop()); // Output: 30
console.log(s.peek()); // Output: 20
```

---

## **🔥 Leetcode Questions**
### **1️⃣ Implement Queue using Stack (Leetcode 232)**
```javascript
var MyQueue = function() {
    this.stack = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

MyQueue.prototype.pop = function() {
    return this.stack.length !== 0 ? this.stack.shift() : null;
};

MyQueue.prototype.peek = function() {
    return this.stack.length !== 0 ? this.stack[0] : null;
};

MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};
```

### **2️⃣ Implement Stack using Queue (Leetcode 225)**
```javascript
var MyStack = function() {
    this.stack = [];
};

MyStack.prototype.push = function(x) {
    this.stack.push(x);
};

MyStack.prototype.pop = function() {
    return this.stack.length !== 0 ? this.stack.pop() : null;
};

MyStack.prototype.top = function() {
    return this.stack.length !== 0 ? this.stack[this.stack.length - 1] : null;
};

MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};
```

### **3️⃣ Valid Parentheses (Leetcode 20)**
```javascript
var isValid = function(s) {
    let stack = [];
    for (let ch of s) {
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;
            let last = stack.pop();
            if ((ch === ")" && last !== "(") ||
                (ch === "]" && last !== "[") ||
                (ch === "}" && last !== "{")) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
```

---

## 🎯 **Key Takeaways**
✅ **Queue and Stack are important data structures used in problem-solving.**  
✅ **Queue follows FIFO (First In, First Out), Stack follows LIFO (Last In, First Out).**  
✅ **Stacks can be implemented using Arrays and Linked Lists.**  
✅ **Queues can be implemented using Arrays and Linked Lists.**  
✅ **Solved Leetcode problems on Stack and Queue.**  

---

🎯 **Next Steps:**  
🚀 Solve more **Leetcode Queue & Stack problems**  
🚀 Implement **Dequeue (Double-Ended Queue)**  
🚀 Learn **Priority Queue & Min/Max Heap**  

🔥 **Great Work! Keep Practicing DSA Consistently!** 🚀