# 📝 Week 10 - Day 4: **DSA Session on Maps**  

Today's session focused on mastering **JavaScript Maps** and solving intriguing problems using them. Here's a detailed recap of what we accomplished. 🚀  

---

## 🔑 **Key Concept: Map in JavaScript**  

A **Map** is a collection of key-value pairs, where:  
- Keys can be of any type (string, number, object, etc.).  
- Each key is unique.  

### **Why Use Map?**  
1. **Flexible Keys:** Unlike objects, keys in a Map can be any type, including objects.  
2. **Iteration Order:** Maps preserve the order of key-value pairs.  
3. **Efficient:** Better performance for frequent additions and removals.  

### **Common Methods in Map**  
| Method            | Description                                     | Example                              |
|--------------------|-------------------------------------------------|--------------------------------------|
| `map.set(key, value)` | Adds or updates a key-value pair               | `map.set("name", "Sambhav")`         |
| `map.get(key)`       | Retrieves the value associated with the key    | `map.get("name")` → `"Sambhav"`      |
| `map.has(key)`       | Checks if the key exists in the map            | `map.has("name")` → `true`           |
| `map.delete(key)`    | Deletes the key-value pair                     | `map.delete("name")`                 |
| `map.size`           | Returns the number of key-value pairs          | `map.size` → `1`                     |
| `map.keys()`         | Returns an iterator for keys                   | `for (let key of map.keys())`        |
| `map.values()`       | Returns an iterator for values                 | `for (let val of map.values())`      |

---

## 🧩 **Problems Solved**

### 🥇 **Question 1: Sum of Unique Elements**  
**LeetCode 1748: Find the Sum of All Unique Elements in an Array**  

**Problem Statement:**  
Given an integer array `nums`, return the sum of all unique elements (elements that appear exactly once).  

**Solution:**  
```javascript
function Question1() {
  // Input array
  let nums = [1, 2, 3, 2];

  // Step 1: Create a Map to store frequency of elements
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  // Step 2: Calculate the sum of unique elements
  let sum = 0;
  for (let key of map.keys()) {
    if (map.get(key) === 1) {
      sum += key;
    }
  }
  return sum;
}

// Output
console.log(Question1()); // Output: 4
```

**Explanation:**  
1. Use a Map to count the occurrences of each number in the array.  
2. Iterate over the keys of the Map.  
3. Add numbers to the sum if their count is `1`.  

---

### 🥈 **Question 2: Sorting Names by Heights**  
**Problem Statement:**  
You are given two arrays: `names` and `heights`. Each `names[i]` corresponds to `heights[i]`. Sort the names in descending order of heights.  

**Solution:**  
```javascript
function Question2() {
  let names = ["Mary", "John", "Emma"];
  let heights = [180, 165, 170];

  // Step 1: Create a Map to associate heights with names
  let map = new Map();
  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  // Step 2: Sort heights in descending order
  heights.sort((a, b) => b - a);

  // Step 3: Create a result array and map sorted heights to names
  let ans = new Array(names.length);
  for (let i = 0; i < ans.length; i++) {
    ans[i] = map.get(heights[i]);
  }

  return ans;
}

// Output
console.log(Question2()); // Output: ["Mary", "Emma", "John"]
```

**Explanation:**  
1. Create a Map where the key is the height and the value is the corresponding name.  
2. Sort the `heights` array in descending order.  
3. Use the sorted `heights` to retrieve names from the Map in the desired order.  

---

## 📝 **Takeaways**

1. **Mastering Maps:**  
   - Efficient for counting frequencies (`map.set` and `map.get`).  
   - Great for associating unique keys to values (e.g., mapping heights to names).  

2. **Use Cases of Map:**  
   - Solving problems with **frequency counting** or **associative arrays**.  
   - Efficiently storing and retrieving data in **O(1)** time complexity for common operations.  

3. **Problem-Solving Skills:**  
   - Leveraging Map for **frequency counting** (Question 1).  
   - Associating multiple arrays using Map (Question 2).  

---

## 💻 **Code Snippets Recap**

### **Map Creation and Usage**  
```javascript
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1")); // Output: value1
console.log(map.size); // Output: 2
```

### **Iterating Over a Map**  
```javascript
for (let [key, value] of map.entries()) {
  console.log(key, value);
}
```

---

🎉 **Happy Coding!** Keep practicing to sharpen your problem-solving skills. 💪