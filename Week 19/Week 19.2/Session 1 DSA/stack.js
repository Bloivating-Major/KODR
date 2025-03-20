// Implementation of queue using array
class QueueArray {
    constructor() {
        this.queue = []; // Array to store queue elements
    }

    // Enqueue: Add element to the rear of the queue
    enqueue(item) {
        this.queue.push(item);
    }

    // Dequeue: Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue.shift(); // Removes first element (FIFO)
    }

    // Peek: Get the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[0];
    }

    // isEmpty: Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Size: Get the number of elements in the queue
    size() {
        return this.queue.length;
    }

    // Print Queue
    print() {
        console.log(this.queue);
    }
}

// Example Usage
let q = new QueueArray();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.print();  // Output: [10, 20, 30, 40]

console.log("Dequeued:", q.dequeue());  // Removes 10, Output: Dequeued: 10
console.log("Front element:", q.peek());  // Output: Front element: 20

q.print();  // Output: [20, 30, 40]
console.log("Queue size:", q.size());  // Output: Queue size: 3
console.log("Is Queue Empty?", q.isEmpty());  // Output: Is Queue Empty? false


// Implementation of Stack using Linked List
// Peek , Push and Pop will be done from Last Element.

// Node class for Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class using Linked List
class StackLinkedList {
    constructor() {
        this.top = null; // Top of the stack
        this.size = 0;   // Track size of stack
    }

    // Push: Add element on top of the stack
    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top; // Point new node to current top
        this.top = newNode; // Update top pointer
        this.size++;
    }

    // Pop: Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow!");
            return null;
        }
        let poppedValue = this.top.value;
        this.top = this.top.next; // Move top to next node
        this.size--;
        return poppedValue;
    }

    // Peek: Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty!");
            return null;
        }
        return this.top.value;
    }

    // isEmpty: Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Size: Return the number of elements in the stack
    getSize() {
        return this.size;
    }

    // Print: Display the stack elements
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

// Example Usage:
let stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Stack: 30 -> 20 -> 10

console.log("Top Element:", stack.peek()); // Top Element: 30
console.log("Popped:", stack.pop()); // Popped: 30
stack.display(); // Stack: 20 -> 10
console.log("Stack Size:", stack.getSize()); // Stack Size: 2
console.log("Is Stack Empty?", stack.isEmpty()); // Is Stack Empty? false


// Implementation of Stack using Stack Array
class StackArray {
    constructor() {
        this.stack = []; // Array to store stack elements
    }

    // Push: Add element to the top of the stack
    push(item) {
        this.stack.push(item);
    }

    // Pop: Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stack.pop();
    }

    // Peek: Get the top element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    // isEmpty: Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Size: Get the number of elements in the stack
    size() {
        return this.stack.length;
    }

    // Print Stack
    print() {
        console.log(this.stack);
    }
}

// Example Usage
let s = new StackArray();

s.push(10);
s.push(20);
s.push(30);
s.push(40);

s.print();  // Output: [10, 20, 30, 40]

console.log("Popped:", s.pop());  // Removes 40, Output: Popped: 40
console.log("Top element:", s.peek());  // Output: Top element: 30

s.print();  // Output: [10, 20, 30]
console.log("Stack size:", s.size());  // Output: Stack size: 3
console.log("Is Stack Empty?", s.isEmpty());  // Output: Is Stack Empty? false

