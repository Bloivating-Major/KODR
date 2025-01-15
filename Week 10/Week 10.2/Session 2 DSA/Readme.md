# 🌟 Week 10 - Day 2: **DSA Session Recap**  
Today's session focused on solving interesting **LeetCode-style problems** and introduced the concepts of **Set** and **Map** in JavaScript. Let's dive into what we learned! 🚀  

---

## 🧩 **Questions Solved**

### 🥇 **Question 1: Maximum Candies Distribution**  
**Problem Statement:**  
You are given an array `candyType`, where each value represents a type of candy. Your task is to determine how many **unique types** of candies a girl can eat if she can eat at most half of the candies.

```javascript
function Question1() {
  let candyType = [1, 1, 2, 3];
  let set = new Set(candyType); // Create a Set to store unique candy types
  console.log(set);

  let size = candyType.length / 2; // Calculate the maximum number of candies she can eat

  if (size >= set.size) {
    console.log("Max Candies she can have is ", set.size); // All unique candies
  } else {
    console.log("Min Candies she can have is ", size); // Half of the candies
  }
}

Question1();
```

**Output:**  
- If the unique candy types (`set.size`) are less than or equal to half the total candies, she can have all unique candies.  
- Otherwise, she can only have up to `size` unique candies.  

---

### 🥈 **Question 2: Find Duplicate and Missing Number**  
**Problem Statement:**  
Given an array `nums` of size `n`, containing numbers from `1` to `n`, find one duplicate number and the missing number.

```javascript
function Question2() {
  let nums = [1, 2, 2, 4];
  let set = new Set();
  let dup = 0;

  // Find duplicate number
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) dup = nums[i];
    else set.add(nums[i]);
  }

  // Find missing number
  let count = 1;
  for (let i = 0; i < set.size; i++) {
    if (set.has(count)) count++;
    else return [dup, count];
  }

  return [dup, count];
}

console.log(Question2());
```

**Output:**  
- Returns an array `[duplicate, missing]`.  

**Example:**  
For `nums = [1, 2, 2, 4]`:  
- Duplicate: `2`  
- Missing: `3`  
- Output: `[2, 3]`  

---

## 🔑 **New Concepts: Set and Map**

### 🎯 **Set**  
A **Set** is a collection of unique values.  

**Key Features of Set:**  
1. **Unique Values Only:** Automatically removes duplicates.  
2. **Common Methods:**
   - `set.add(value)` → Adds a value to the set.  
   - `set.has(value)` → Checks if the value exists in the set.  
   - `set.delete(value)` → Removes a value from the set.  
   - `set.size` → Returns the size of the set.  

**Example:**  
```javascript
let set = new Set([1, 1, 2, 3]);
console.log(set); // Output: Set { 1, 2, 3 }
```

---

### 🎯 **Map**  
A **Map** is a collection of key-value pairs, where both keys and values can be of any data type.  

**Key Features of Map:**  
1. **Unique Keys:** Each key must be unique.  
2. **Order-Preserved:** Keys are iterated in the order they were added.  
3. **Common Methods:**
   - `map.set(key, value)` → Adds a key-value pair.  
   - `map.get(key)` → Retrieves the value associated with the key.  
   - `map.delete(key)` → Removes a key-value pair.  
   - `map.size` → Returns the number of key-value pairs.  

**Example:**  
```javascript
let map = new Map();

map.set("raj", 5);
map.set("amit", 7);
map.set("kunal", 5);
map.set("raj", 9); // Updates the value for key "raj"
map.set(10, 5);

console.log(map);
// Output: Map(4) { 'raj' => 9, 'amit' => 7, 'kunal' => 5, 10 => 5 }
```

---

## 📝 **Takeaways**

1. **Set:**  
   - Use when you need to store unique values.  
   - Great for finding duplicates or ensuring uniqueness.  

2. **Map:**  
   - Use for key-value pairs where keys can be of any type.  
   - Useful for scenarios like counting occurrences or storing configurations.  

3. **Problem-Solving Insights:**  
   - Leverage **Set** for duplicate elimination and quick lookups.  
   - Use **Map** to efficiently store and retrieve values based on unique keys.  

---

🎉 Happy Coding!