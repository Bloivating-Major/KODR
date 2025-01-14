# 📚 Week 10 - Day 1: **DSA & JavaScript Sets**  

---

## 🚀 **Session 2: LeetCode Practice + Mastering JS Sets**

Today, we dived into solving **LeetCode questions** 🧩 and explored the power of **Sets in JavaScript** for handling unique data and efficient lookups. Here's the breakdown:

---

## ✨ **Key Concepts Studied**
- **JavaScript Sets**  
  - A **Set** is a collection of unique values (no duplicates allowed).  
  - Operations like `add`, `delete`, and `has` make Sets incredibly efficient for certain problems.  

---

### 🛠️ **JavaScript Set Basics**

#### Example: Removing Duplicate Elements  
```javascript
let arr = [10, 12, 10, 12, 4, 1, 2, 4, 2];
let set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) set.delete(arr[i]);
  else set.add(arr[i]);
}
console.log(set); // Output: Set { 1 }
```
**Explanation:**  
- This code identifies the element(s) that occur only once by adding/removing elements from the Set.

---

## 🧩 **LeetCode Questions Solved**

### **1️⃣ LeetCode 1832: Check if the Sentence is a Pangram**  
🔍 **Problem:**  
A sentence is a **pangram** if it contains every letter of the English alphabet at least once. Write a function to check if a given sentence is a pangram.

#### **Solution:**  
```javascript
function Question1() {
  let sentence = "leetcode"; // Example Input
  let set = new Set();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] >= "a" && sentence[i] <= "z") {
      set.add(sentence[i]);
    }
  }

  if (set.size == 26) console.log("Panagram");
  else console.log("Not Panagram");
}

// Question1();
```

#### ✅ **Key Steps:**  
1. **Initialize a Set:** To store unique letters.  
2. **Iterate Through the Sentence:** Add letters to the Set if they fall within the range of `'a'` to `'z'`.  
3. **Check the Set Size:** If the size is 26, the sentence is a pangram.  

---

### **2️⃣ LeetCode 771: Jewels and Stones**  
🔍 **Problem:**  
You're given two strings:  
- `jewels` (types of stones that are jewels).  
- `stones` (stones you have).  
Find out how many of the stones you have are also jewels.

#### **Solution:**  
```javascript
function Question2() {
  let jewels = "aA"; // Example Input
  let stones = "aAAbbbb"; // Example Input
  let count = 0;
  let set = new Set(jewels);

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }
  console.log(count); // Output: 3
}

Question2();
```

#### ✅ **Key Steps:**  
1. **Initialize a Set:** Store all jewel types in the Set for fast lookup.  
2. **Iterate Through Stones:** Increment the count for every stone that exists in the Set.  

---

## 🔑 **Takeaways from Today**
1. **JS Sets are Powerful!**  
   - Efficiently handle **unique elements**.  
   - Use methods like `add`, `delete`, and `has` for seamless operations.  

2. **LeetCode Mastery:**  
   - Solved **real-world problems** by combining logic with Set operations.  
   - Strengthened understanding of efficient lookups.  

---

## 💡 **What’s Next?**
- More hands-on practice with **data structures** like Maps, Arrays, and Objects.  
- Continue solving **LeetCode problems** to strengthen logic-building skills.  

---

🎉 **Great Progress Today!** Keep coding, keep growing 🚀  