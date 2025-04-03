
# 🌳 **Week 21 | Day 4 | DSA Session - Binary Tree Traversals**  

> **"Understanding Trees is like unlocking the secrets of nature! 🌱"**  

💡 **Today's Focus:** Building a **Binary Tree** and implementing its **Preorder, Inorder, and Postorder Traversals.**  

---

## 📌 **Concepts Covered**  
✅ **Tree Structure** 🌳  
✅ **Building a Binary Tree using Recursion** 🔄  
✅ **Depth-First Traversal Techniques** (Preorder, Inorder, Postorder) 🔥  

---

## 🔹 **1️⃣ Creating a Binary Tree**  

### 🛠 **Approach:**  
1️⃣ **Ask for user input** to create nodes.  
2️⃣ **Use recursion** to build the tree structure dynamically.  
3️⃣ If input is `-1`, **return null** (no node).  
4️⃣ Assign left and right child nodes **recursively**.  

### 🔥 **Code Implementation:**  

```javascript
const prompt = require("prompt-sync")();

class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    createTree() {
        let data = parseInt(prompt("Enter a value (-1 for no node): "));
        if (data === -1) return null;

        let newNode = new Node(data);

        console.log("Enter Left Child for " + data);
        newNode.left = this.createTree();

        console.log("Enter Right Child for " + data);
        newNode.right = this.createTree();

        return newNode; // Return the newly created subtree
    }

    build() {
        this.root = this.createTree();
    }
}
```

---

## 🔹 **2️⃣ Tree Traversal Methods**  

### 🌟 **Preorder Traversal (Root → Left → Right)**
**Intuition:**  
- Visit the **root node first**.  
- Recursively traverse the **left subtree**.  
- Recursively traverse the **right subtree**.  

```javascript
preorder(root) {
    if (root == null) return;
    process.stdout.write(root.val + " ");
    this.preorder(root.left);
    this.preorder(root.right);
}
```

✅ **Example Output:**  
```
Preorder Traversal: 1 2 4 5 3 6 7
```

---

### 🌟 **Inorder Traversal (Left → Root → Right)**
**Intuition:**  
- Recursively traverse the **left subtree**.  
- Visit the **root node**.  
- Recursively traverse the **right subtree**.  

```javascript
inorder(root) {
    if (root == null) return;
    this.inorder(root.left);
    process.stdout.write(root.val + " ");
    this.inorder(root.right);
}
```

✅ **Example Output:**  
```
Inorder Traversal: 4 2 5 1 6 3 7
```

---

### 🌟 **Postorder Traversal (Left → Right → Root)**
**Intuition:**  
- Recursively traverse the **left subtree**.  
- Recursively traverse the **right subtree**.  
- Visit the **root node**.  

```javascript
postorder(root) {
    if (root == null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    process.stdout.write(root.val + " ");
}
```

✅ **Example Output:**  
```
Postorder Traversal: 4 5 2 6 7 3 1
```

---

## 🎯 **Key Takeaways**  
✅ **Recursion is a powerful tool for building trees!** 🌲  
✅ **Tree traversals help in solving many real-world problems like XML parsing, directory structures, and AI decision trees.**  
✅ **Inorder traversal helps in getting sorted output for BSTs.**  
✅ **Postorder is useful in memory deallocation and expression trees.**  

---

## 🚀 **Next Steps**  
🔸 Implement **Level Order Traversal** (BFS).  
🔸 Convert the tree into a **Binary Search Tree (BST)**.  
🔸 Solve **Diameter of a Binary Tree** problem.  

---

💭 **"Trees are not just data structures; they are nature's way of organizing life! 🌿🌎"**  

---

How’s this? Let me know if you want any tweaks! 🚀🔥