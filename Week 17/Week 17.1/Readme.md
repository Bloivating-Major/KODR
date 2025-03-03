# 🚀 **Week 17 Day 1 - Session 2 (DSA: Linked List Questions in JavaScript)** 🔗

## **📌 Topics Covered**
✅ **Leetcode 707** - **Design a Linked List** (Implementing a custom linked list)  
✅ **Leetcode 83** - **Delete Duplicates in a Sorted Linked List**  
  - **Recursive Approach**  
  - **Iterative Approach**  

---

# 🔹 **Leetcode 707: Design Linked List**
📌 **Problem Statement:**  
Design a **singly linked list** that supports the following operations:
- `get(index)`: Get the value of the node at a given index.
- `addAtHead(val)`: Add a node at the head.
- `addAtTail(val)`: Add a node at the tail.
- `addAtIndex(index, val)`: Add a node at a given index.
- `deleteAtIndex(index)`: Delete the node at a given index.

---

## **🔹 Solution: Implementing a Linked List**
### 🛠 **Step 1: Define the `ListNode` Class**
```javascript
var ListNode = function(val) {
    this.val = val;
    this.next = null;
};
```
- Represents **each node** in the linked list.
- Stores a **value** and a **next pointer**.

---

### 🛠 **Step 2: Define the `MyLinkedList` Class**
```javascript
var MyLinkedList = function() {
    this.head = null;  // Points to the first node
    this.size = 0;     // Stores the number of elements in the list
};
```
- **`head`** keeps track of the first node.
- **`size`** maintains the total number of nodes.

---

### 🛠 **Step 3: Get Element at an Index**
```javascript
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1; // If index is invalid
    
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};
```
✅ **Time Complexity:** `O(n)`

---

### 🛠 **Step 4: Add Node at Head**
```javascript
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new ListNode(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};
```
- **Inserts a node at the head**
- ✅ **Time Complexity:** `O(1)`

---

### 🛠 **Step 5: Add Node at Tail**
```javascript
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new ListNode(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.size++;
};
```
✅ **Time Complexity:** `O(n)`

---

### 🛠 **Step 6: Add Node at an Index**
```javascript
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    let newNode = new ListNode(val);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
};
```
✅ **Time Complexity:** `O(n)`

---

### 🛠 **Step 7: Delete Node at an Index**
```javascript
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) return;
    
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
    }
    this.size--;
};
```
✅ **Time Complexity:** `O(n)`

---

### 🎯 **Example Usage**
```javascript
let obj = new MyLinkedList();
obj.addAtHead(1);       // List: [1]
obj.addAtTail(3);       // List: [1, 3]
obj.addAtIndex(1, 2);   // List: [1, 2, 3]
console.log(obj.get(1)); // Output: 2
obj.deleteAtIndex(1);   // List: [1, 3]
console.log(obj.get(1)); // Output: 3
```
---

# 🔹 **Leetcode 83: Remove Duplicates from Sorted Linked List**
📌 **Problem Statement:** Given a sorted linked list, remove all duplicates so that each element appears only once.

---

### **🔹 Approach 1: Recursive Solution**
📜 **Steps:**  
1️⃣ Base Case: If the list is empty or has only one element, return it.  
2️⃣ Recur for `head.next`.  
3️⃣ If `head.val == head.next.val`, **skip it**.  

```javascript
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head;

    head.next = deleteDuplicates(head.next);

    if(head.val === head.next.val) return head.next;
    else return head;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(n)` (Recursive Stack)

---

### **🔹 Approach 2: Iterative Solution**
📜 **Steps:**  
1️⃣ Traverse the linked list.  
2️⃣ If a node has the same value as `next`, **skip it**.  
3️⃣ Move to the next node.  

```javascript
var deleteDuplicates = function(head) {
    let current = head;

    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next; // Skip duplicates
        }else{
            current = current.next; // Move forward
        }
    }

    return head;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

# **📌 Summary of the Day**
🔹 **Leetcode 707** - Designed a **custom linked list** with insert, delete, and get operations.  
🔹 **Leetcode 83** - Removed duplicates using **recursive & iterative** methods.  

---

## **🎯 Key Takeaways**
✔️ Implement **custom linked list operations**.  
✔️ Understand **recursive vs iterative** approaches for linked list problems.  
✔️ Use **dummy nodes** to simplify **edge cases**.  
✔️ Use **fast & slow pointers** to optimize linked list problems.  

---

## 🚀 **Next Steps**
🔹 Solve **Leetcode 876** (Middle of the Linked List)  
🔹 Try **Leetcode 234** (Palindrome Linked List)  
🔹 Implement **Doubly Linked List** 💻🔥  

---

🔗 **Keep coding, keep improving!** 💪🚀