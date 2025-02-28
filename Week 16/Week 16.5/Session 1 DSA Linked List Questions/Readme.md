# 📌 **Week 16 Day 5 - Session 1 (DSA: Linked List Questions in JavaScript)** 🔗

## **📝 Topics Covered**
✅ **Leetcode 21:** Merge Two Sorted Lists (Recursive & Iterative)  
✅ **Leetcode 141:** Detect Cycle in Linked List (Slow & Fast Pointer Approach)  
✅ **Leetcode 142:** Find Start of Cycle in Linked List (Floyd's Tortoise & Hare Algorithm)  
✅ **Leetcode 206:** Reverse a Linked List (Three-Pointer Iterative Approach)  

---

## **🔹 Question 1: Merge Two Sorted Lists**  
📌 **Problem Statement:** Given two sorted linked lists, merge them into one sorted linked list.  

### 🛠 **Recursive Approach**
📜 **Steps:**  
1️⃣ If `list1` is empty, return `list2`.  
2️⃣ If `list2` is empty, return `list1`.  
3️⃣ Compare `list1.val` and `list2.val`, recursively merge the smaller one with the remaining part.  

```javascript
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
```

---

### 🛠 **Iterative Approach**
📜 **Steps:**  
1️⃣ Use a **dummy node** to simplify edge cases.  
2️⃣ Use `temp` to traverse and link the smaller node.  
3️⃣ Attach the remaining nodes at the end.  

```javascript
var mergeTwoListsIterative = function(list1, list2) {
    let ans = new ListNode(); // Dummy node
    let temp = ans;
    let one = list1, two = list2;

    while (one !== null && two !== null) {
        if (one.val < two.val) {
            temp.next = one;
            one = one.next;
        } else {
            temp.next = two;
            two = two.next;
        }
        temp = temp.next;
    }

    temp.next = one === null ? two : one; // Attach remaining nodes
    return ans.next;
};
```
---

## **🔹 Question 2: Linked List Cycle (Leetcode 141)**  
📌 **Problem Statement:** Check if a cycle exists in the linked list.  

📜 **Approach:**  
🚀 Use **Slow & Fast Pointer (Floyd’s Cycle Detection Algorithm)**  
1️⃣ `slow` moves **1 step**, `fast` moves **2 steps**.  
2️⃣ If they meet, a **cycle exists**.  
3️⃣ If `fast` reaches `null`, **no cycle** exists.  

```javascript
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;      // Move slow by 1 step
        fast = fast.next.next; // Move fast by 2 steps
        
        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    
    return false; // No cycle
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

## **🔹 Question 3: Find Start of Cycle (Leetcode 142)**  
📌 **Problem Statement:** Find the starting node of the cycle.  

📜 **Approach (Floyd's Tortoise and Hare Algorithm)**  
1️⃣ Detect cycle using **Slow & Fast Pointer**.  
2️⃣ Reset `slow` to `head`, then move **both pointers 1 step at a time**.  
3️⃣ When they meet again, that is the **start of the cycle**.  

```javascript
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            slow = head; // Reset slow pointer
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow; // Start of cycle
        }
    }
    
    return null; // No cycle
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

## **🔹 Question 4: Reverse a Linked List (Leetcode 206)**  
📌 **Problem Statement:** Reverse a linked list.  

📜 **Approach (Three-Pointer Iterative Approach)**  
1️⃣ Use **three pointers:** `prev`, `current`, `next`.  
2️⃣ Reverse the `next` pointer of `current` to `prev`.  
3️⃣ Move `prev` and `current` one step ahead.  

```javascript
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let temp = current.next; // Store next node
        current.next = prev;     // Reverse the link
        prev = current;          // Move prev forward
        current = temp;          // Move current forward
    }

    return prev; // New head of the reversed list
};
```
✅ **Time Complexity:** `O(n)`  
✅ **Space Complexity:** `O(1)`

---

## **🎯 Key Takeaways**
🔹 **Merge Two Sorted Lists:** Use **recursion** or **dummy node with iteration**.  
🔹 **Detect Cycle:** Use **Slow & Fast Pointer Approach**.  
🔹 **Find Start of Cycle:** Use **Floyd's Cycle Detection Algorithm**.  
🔹 **Reverse a Linked List:** Use **Three-Pointer Iterative Approach**.  

---

## 🚀 **Final Thoughts**
🎉 Great job on revising **Linked List problems**!  
🔹 Next Steps:  
✅ Try **Leetcode 234 (Palindrome Linked List)**  
✅ Implement **Linked List problems in different languages**  
✅ Optimize **merge & cycle detection solutions**  

🔗 **Keep coding, keep improving!** 💻🔥