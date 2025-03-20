
# 📚 **Week 19 Day 1 - DSA**
## 🚀 **Topics Covered**
✅ **Leetcode 25 - Reverse Nodes in k-Group**  
✅ **Introduction to Queue**  
✅ **Queue Operations (enqueue, dequeue, peek, isEmpty, size, display)**  
✅ **Queue Implementation using Linked List**  

---

## 🔄 **Leetcode 25 - Reverse Nodes in k-Group**
The problem **Reverse Nodes in k-Group** requires reversing k nodes at a time in a linked list.  

### **🔹 Approach**
1️⃣ Reverse the first **k nodes** using **iterative reversal**.  
2️⃣ Recursively process the next k-group.  
3️⃣ Connect the reversed part with the next processed k-group.  
4️⃣ Base Case: If the remaining nodes are **less than k**, return as is.

### **💡 Implementation**
```javascript
function reverse(start, end) {
    let prev = null, cur = start;
    while (cur !== end) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}

var reverseKGroup = function(head, k) {
    if (head === null || head.next === null || k === 1) return head;

    let end = head;
    for (let i = 0; i < k; i++) {
        if (end === null) return head; // If fewer than k nodes left, return head
        end = end.next;
    }

    let start = head;
    let newNode = reverse(start, end);
    start.next = reverseKGroup(end, k);

    return newNode;
};
```
### **⏱️ Time Complexity:** **O(N)**  
### **📌 Space Complexity:** **O(N/k) (Recursion Stack)**  
### **💡 Edge Cases:**  
- If `k == 1`, return the list as is.  
- If `k > list size`, return the list as is.  

---

## 🏗️ **Queue Data Structure**
A **Queue** follows the **FIFO (First-In-First-Out)** principle, meaning elements are inserted at the **rear** and removed from the **front**.  

### **📌 Operations in Queue**
✅ **enqueue** ➝ Add element to queue  
✅ **dequeue** ➝ Remove element from queue  
✅ **peek** ➝ View front element  
✅ **isEmpty** ➝ Check if queue is empty  
✅ **size** ➝ Get queue size  

### **🔹 Visual Representation**
```
FRONT → [ 10 | 20 | 30 | 40 | 50 ] ← REAR
```

---

## 🛠️ **Queue Implementation using Linked List**
```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // ✅ Add an element to queue (enqueue)
    enqueue(val) {
        const newNode = new Node(val);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // ✅ Remove an element from queue (dequeue)
    dequeue() {
        if (this.front === null) {
            console.log("⚠️ Queue is empty");
            return;
        }
        this.front = this.front.next;
        if (this.front === null) this.rear = null;
        this.size--;
    }

    // ✅ Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // ✅ Display queue elements
    display() {
        if (this.front === null) {
            console.log("⚠️ Queue is empty");
            return;
        }
        let cur = this.front;
        while (cur !== null) {
            process.stdout.write(cur.val + " ");
            cur = cur.next;
        }
        console.log();
    }
}

// 🔹 Testing the Queue Implementation
let obj = new Queue();
obj.enqueue(10);
obj.enqueue(20);
obj.enqueue(30);
obj.enqueue(40);
obj.enqueue(50);
obj.display(); // Output: 10 20 30 40 50

obj.dequeue();
obj.display(); // Output: 20 30 40 50

console.log("Queue Size:", obj.size); // Output: 4
console.log("Is Queue Empty?", obj.isEmpty()); // Output: false
```

---

## 🎯 **Key Takeaways**
✅ **Reversing K nodes in Linked List using Recursion**  
✅ **Queue follows FIFO principle**  
✅ **Implemented Queue using Linked List**  
✅ **Performed operations: enqueue, dequeue, peek, size, isEmpty, display**  

---

🎯 **Next Steps:**  
🚀 Implement **Queue using Array**  
🚀 Solve **Queue-based Leetcode problems**  

🔥 **Great Work! Keep Practicing DSA Consistently!** 🚀