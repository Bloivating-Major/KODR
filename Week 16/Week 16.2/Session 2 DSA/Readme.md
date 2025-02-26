# 🔗 **Week 16 Day 2 - Session 2 (DSA: Linked List)** 🚀  

## 📌 **Topics Covered:**  
✅ **Understanding Linked Lists** 🧩  
✅ **Creating a Node Class** 🎯  
✅ **Creating a Linked List Class** 🏗️  
✅ **Inserting a Node at the Beginning** 🔽  
✅ **Printing the Linked List** 📜  

---

## 📝 **What is a Linked List?**  
A **linked list** is a **dynamic** data structure consisting of **nodes**, where each node contains:  
1️⃣ A **value** (data).  
2️⃣ A **reference (next)** to the next node in the sequence.  

Unlike arrays, **linked lists** are not stored in **contiguous memory** and offer efficient **insertions** and **deletions** at the beginning.

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
✅ `insertAtFirst(val)` → Inserts a node at the **beginning**.  
✅ `print()` → Prints the linked list.  

```javascript
class LinkedList {
    constructor() {
        this.head = null; // Initially, list is empty
    }

    insertAtFirst(val) {
        let newNode = new Node(val); // Create a new node
        if (this.head === null) {
            this.head = newNode; // If list is empty, head becomes newNode
            return;
        }
        newNode.next = this.head; // Point newNode to current head
        this.head = newNode; // Update head to newNode
    }

    print() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.val + " → ";
            temp = temp.next;
        }
        console.log(output + "NULL");
    }
}
```

---

## 🏃‍♂️ **Testing Our Linked List**
```javascript
let obj1 = new LinkedList();

obj1.insertAtFirst(10);
obj1.insertAtFirst(20);
obj1.insertAtFirst(30);

obj1.print(); // Output: 30 → 20 → 10 → NULL
```

---

## 🎯 **Key Takeaways**  
✅ **Nodes** store values & pointers to the next node.  
✅ **Linked Lists** allow **efficient insertions/deletions** at the beginning.  
✅ **`insertAtFirst(val)`** adds elements to the front.  
✅ **`print()`** method displays the list structure.  

📌 **Next Steps:**  
🔹 Implement **insert at end, delete node, and search functionalities**.  
🔹 Explore **doubly linked lists & circular linked lists**.  

---

🔥 **With this, you have implemented a basic Linked List!** 🚀 Keep practicing! 💡