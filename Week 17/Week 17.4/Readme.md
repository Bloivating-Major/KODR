# 🚀 **Week 17 Day 4 - Session 1 (DSA: Linked List Leetcode Questions)** 🔗  

## **📌 Topics Covered**
✅ **Leetcode 1290** - Convert Binary Number in a Linked List to Integer  
✅ **Leetcode 203** - Remove Linked List Elements  
✅ **Leetcode 234** - Palindrome Linked List  
✅ **Leetcode 160** - Intersection of Two Linked Lists (Hash & Two Pointer Approach)  
✅ **Leetcode 82** - Remove Duplicates from Sorted Linked List II  

---

# 🔹 **Leetcode 1290: Convert Binary Number in a Linked List to Integer**  
📌 **Problem Statement:**  
Given a **singly linked list** where each node contains a binary digit (`0` or `1`), convert it into an **integer**.

### **💡 Solution: Iterative Approach**
**Steps:**  
1️⃣ Find the **size** of the linked list.  
2️⃣ Iterate over the linked list and **calculate the decimal value**.  

```javascript
var getDecimalValue = function(head) {
    let temp = head, size = 0, ans = 0;
    
    // Step 1: Find the size of the list
    while(temp !== null){
        size++;
        temp = temp.next;
    }
    
    // Step 2: Convert binary to decimal
    temp = head;
    while(temp !== null){
        ans += (Math.pow(2, size-1) * temp.val);
        size--;
        temp = temp.next;
    }
    
    return ans;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`  

---

# 🔹 **Leetcode 203: Remove Linked List Elements**  
📌 **Problem Statement:**  
Remove **all occurrences** of a specific value from a **singly linked list**.

### **💡 Solution: Iterative Approach (Using a Dummy Node)**
**Steps:**  
1️⃣ Create a **dummy node** pointing to `head`.  
2️⃣ Traverse the list, **removing nodes** with the target value.  
3️⃣ Return `dummyNode.next`.

```javascript
var removeElements = function(head, val) {
    if(head === null) return null;

    let dummyNode = new ListNode(0);
    let temp = dummyNode;
    temp.next = head;

    while(temp !== null && temp.next !== null){
        if(temp.next.val === val){
            temp.next = temp.next.next;  // Remove the node
        } else {
            temp = temp.next;
        }
    }

    return dummyNode.next;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`  

---

# 🔹 **Leetcode 234: Palindrome Linked List**  
📌 **Problem Statement:**  
Determine if a **singly linked list** is a **palindrome**.

### **💡 Solution: Two-Pointer Approach (Reverse Half the List)**
**Steps:**  
1️⃣ Find the **size** of the linked list.  
2️⃣ Reverse the **first half** of the list.  
3️⃣ Compare both halves.

```javascript
var isPalindrome = function(head) {
    let size = 0, temp = head;
    
    // Step 1: Find the size of the linked list
    while (temp) {
        size++;
        temp = temp.next;
    }

    // Step 2: Reverse the first half of the list
    let prev = null, current = head;
    for (let i = 0; i < Math.floor(size / 2); i++) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    // Step 3: Skip the middle node if size is odd
    if (size % 2 !== 0) {
        current = current.next;
    }

    // Step 4: Compare both halves
    while (prev && current) {
        if (prev.val !== current.val) return false;
        prev = prev.next;
        current = current.next;
    }

    return true;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

# 🔹 **Leetcode 160: Intersection of Two Linked Lists**  
📌 **Problem Statement:**  
Find the **intersection node** between two **singly linked lists**.

### **💡 Solution 1: HashSet Approach**  
**Steps:**  
1️⃣ Store all nodes of **List A** in a **set**.  
2️⃣ Traverse **List B**, checking if a node exists in the **set**.  
3️⃣ Return the **intersection node**.

```javascript
var getIntersectionNode = function(headA, headB) {
    let set = new Set();

    // Add all nodes of List A to the set
    while (headA !== null) {
        set.add(headA);
        headA = headA.next;
    }

    // Check for intersection in List B
    while (headB !== null) {
        if (set.has(headB)) return headB;
        headB = headB.next;
    }

    return null;
};
```
✅ **Time Complexity:** `O(m + n)`  
✅ **Space Complexity:** `O(m)`

---

### **💡 Solution 2: Two Pointer Approach**
**Steps:**  
1️⃣ Use **two pointers** (`a`, `b`) starting at `headA` and `headB`.  
2️⃣ If `a` reaches `null`, move it to `headB`.  
3️⃣ If `b` reaches `null`, move it to `headA`.  
4️⃣ When `a === b`, we found the **intersection node**.

```javascript
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA, b = headB;

    while (a !== b) { 
        a = (a === null) ? headB : a.next;
        b = (b === null) ? headA : b.next;
    }

    return a;
};
```
✅ **Time Complexity:** `O(m + n)`  
✅ **Space Complexity:** `O(1)`

---

# 🔹 **Leetcode 82: Remove Duplicates from Sorted Linked List II**  
📌 **Problem Statement:**  
Remove **all nodes** that have duplicate numbers, leaving **only distinct numbers**.

### **💡 Solution: Iterative Approach**
**Steps:**  
1️⃣ Use a **dummy node**.  
2️⃣ Track nodes with **duplicate values** using `prev`.  
3️⃣ Skip **all occurrences** of duplicates.

```javascript
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;  // Skip duplicates
            }
            prev.next = current.next;  // Remove all duplicates
        } else {
            prev = prev.next;
        }
        current = current.next;
    }

    return dummy.next;
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

# **📌 Summary of the Day**
✔️ **Leetcode 1290** - Converted binary **linked list to an integer**.  
✔️ **Leetcode 203** - Removed **specific value** from a linked list.  
✔️ **Leetcode 234** - Checked if a **linked list is a palindrome**.  
✔️ **Leetcode 160** - Found **intersection node** (Hash & Two Pointer).  
✔️ **Leetcode 82** - Removed **all duplicate elements**.  

---

## **🎯 Key Takeaways**
✔️ **Two-pointer technique** for optimization.  
✔️ **Dummy nodes** help in handling **edge cases**.  
✔️ **Set & HashMaps** can store visited nodes efficiently.  
✔️ **Linked list traversal** is crucial for manipulation.  

---

## 🚀 **Next Steps**
🔹 Solve **Leetcode 876** (Middle of the Linked List)  
🔹 Try **Leetcode 25** (Reverse Nodes in k-Group)  
🔹 Implement **Doubly Linked List** for better understanding  

---

💡 **Keep coding, keep improving!** 💪🚀