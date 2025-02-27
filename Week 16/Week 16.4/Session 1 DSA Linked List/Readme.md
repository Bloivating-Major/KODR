# 🔗 **Week 16 Day 4 - Session 1 (DSA: Linked List Advanced Operations)** 🚀  

## 📌 **Topics Covered:**  
✅ **Linked List Fundamentals** 🧩  
✅ **Inserting at the Beginning & End** 🔼🔽  
✅ **Deleting from the Beginning & End** ❌  
✅ **Inserting at a Specific Position** 📌  
✅ **Deleting from a Specific Position** 🚫  
✅ **Printing the Linked List** 📜  

---

## 📝 **What is a Linked List?**  
A **linked list** is a **dynamic** data structure where elements (nodes) are stored in **non-contiguous** memory locations. Each **node** consists of:  
1️⃣ A **value** (data).  
2️⃣ A **reference (next)** to the next node in the sequence.  

Unlike arrays, **linked lists** allow efficient **insertions** and **deletions** at any position.

---

## 📜 **Node Class Implementation**  
Each **Node** stores data and a reference to the next node.

```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;  // Points to the next node
    }
}
```

---

## 🏗 **Linked List Implementation**  
A **Linked List** contains:  
✅ `head` (starting node).  
✅ `size` (tracks number of nodes).  
✅ **Insertion & Deletion Methods** at various positions.  

```javascript
class LinkedList {
    constructor() {
        this.head = null; // Initially, list is empty
        this.size = 0; // Number of items in the list
    }
```

---

## 🔼 **Insertion Operations**
### 1️⃣ **Insert at the Beginning**  
**Logic:**  
- Create a new node.  
- Point its `next` to the current `head`.  
- Update `head` to the new node.

```javascript
    insertAtFirst(val) {
        this.size++;
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
```

### 2️⃣ **Insert at the End**  
**Logic:**  
- If the list is empty, make `head` the new node.  
- Otherwise, traverse to the last node and update `next` to point to new node.

```javascript
    insertAtLast(val){
        this.size++;
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next!== null){
            current = current.next;
        }
        current.next = newNode;
    }
```

### 3️⃣ **Insert at a Specific Position**  
**Logic:**  
- Validate position.  
- If position is **1**, call `insertAtFirst()`.  
- If position is **last**, call `insertAtLast()`.  
- Otherwise, traverse to the correct position and adjust `next` pointers.

```javascript
    insertAtPosition(value, position){
        if(position < 1 || this.size+1 < position){
            console.log("Invalid position");
            return;
        }
        if(position===1) {
            this.insertAtFirst(value);
            return;
        }
        if(position === this.size+1){
            this.insertAtLast(value);
            return;
        }
        this.size++;
        let newNode = new Node(value);
        let current = this.head;
        let i =1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
```

---

## ❌ **Deletion Operations**
### 1️⃣ **Delete from the Beginning**
**Logic:**  
- If list is empty, print **"List is empty"**.  
- If only **one node**, set `head` to **null**.  
- Otherwise, update `head` to point to `head.next`.  

```javascript
    deleteAtFirst(){
        this.size--;
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        this.head = this.head.next;
    }
```

### 2️⃣ **Delete from the End**  
**Logic:**  
- If list is **empty** or has **only one node**, set `head = null`.  
- Otherwise, traverse to the **second last node** and update its `next` to `null`.

```javascript
    deleteAtLast(){
        this.size--;
        if(this.head == null || this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next!== null){
            current = current.next;
        }
        current.next = null;
    }
```

### 3️⃣ **Delete from a Specific Position**  
**Logic:**  
- If position is **1**, call `deleteAtFirst()`.  
- If position is **last**, call `deleteAtLast()`.  
- Otherwise, traverse to the **previous node** and update its `next` pointer.

```javascript
    deleteAtPosition(position){
        if(position < 1 || this.size < position){
            console.log("Invalid position");
            return;
        }
        if(position === 1) {
            this.deleteAtFirst();
            return;
        }
        if(position === this.size){
            this.deleteAtLast();
            return;
        }
        this.size--;
        let current = this.head;
        let i = 1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        current.next = current.next.next;
    }
```

---

## 📜 **Print Linked List**
```javascript
    print() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.val + " → ";
            temp = temp.next;
        }
        console.log(output + "NULL");
    }
```

---

## 🏃‍♂️ **Testing Our Linked List**
```javascript
let obj = new LinkedList();

obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);

obj.insertAtLast(40);
obj.insertAtLast(50);

obj.print();  // Output: 30 → 20 → 10 → 40 → 50 → NULL

obj.deleteAtFirst();
obj.print();  // Output: 20 → 10 → 40 → 50 → NULL

obj.deleteAtLast();
obj.print();  // Output: 20 → 10 → 40 → NULL

obj.insertAtPosition(60, 3);
obj.print();  // Output: 20 → 10 → 60 → 40 → NULL

obj.deleteAtPosition(2);
obj.print();  // Output: 20 → 60 → 40 → NULL
```

---

## 🎯 **Key Takeaways**  
✅ **Insertion & Deletion** at the beginning, end, and specific positions.  
✅ **Time Complexity**:  
- **Insertion at Head**: `O(1)`, at Tail: `O(n)`, at Position: `O(n)`.  
- **Deletion at Head**: `O(1)`, at Tail: `O(n)`, at Position: `O(n)`.  
✅ **Maintains Order** while allowing **dynamic** insertions.  

📌 **Next Steps:**  
🔹 Implement **Doubly Linked Lists**.  
🔹 Implement **Circular Linked Lists**.  
🔹 Solve **Linked List interview problems**.  

---

🔥 **With this, you have mastered Linked List operations!** 🚀 Keep practicing! 💡