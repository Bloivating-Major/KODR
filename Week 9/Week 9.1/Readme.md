
---

# 🚀 Week 9 - Day 1

Welcome to Day 1 of Week 9! Today, we explored some exciting problem-solving exercises across two sessions. Here’s a structured breakdown of everything we covered.

---

## 📚 **Session 1: Problem-Solving with Arrays**

### 🔥 Question 1: Divide Array Into Equal Pairs
**Goal:** Check if an array can be divided into equal pairs.  
**Solution:**
- Sort the array.
- Count pairs of consecutive elements.
- Verify if the count matches half the array length.  
**Code:**  
```javascript
function Question1() {
  let nums = [3, 2, 3, 2, 2, 2];
  nums.sort((a, b) => a - b);
  let pair = 0;

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] == nums[i + 1]) pair++;
  }

  return pair == nums.length / 2;
}
```

---

### 🔢 Question 2: Count Pairs and Remaining Elements
**Goal:** Count pairs of identical numbers and find the leftover.  
**Solution:**
- Sort the array.
- Count pairs and calculate remaining elements.  
**Code:**  
```javascript
function Question2() {
  let nums = [1, 3, 2, 1, 3, 2, 2];
  let pairs = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; ) {
    if (nums[i] == nums[i + 1]) {
      pairs++;
      i += 2;
    } else i++;
  }
  let arr = new Array(2);
  arr[0] = pairs;
  arr[1] = nums.length - 2 * pairs;
  return arr;
}
```

---

### 🔗 Question 3: Pairs with Divisible Indices
**Goal:** Count pairs of identical numbers where the product of their indices is divisible by `k`.  
**Code:**  
```javascript
function Question3() {
  let nums = [3, 1, 2, 2, 2, 1, 3], k = 2;
  let pair = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j] && ((i * j) % k) == 0) {
        pair++;
      }
    }
  }
  return pair;
}
```

---

### 🏔️ Question 4: Count Hills and Valleys
**Goal:** Identify and count hills and valleys in an array.  
**Code:**  
```javascript
function Question4() {
  let nums = [2, 4, 1, 1, 6, 5];
  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i - 1]) continue;
    let next = i + 1;
    let prev = i - 1;
    while (nums[i] == nums[next]) next++;
    while (nums[i] == nums[prev]) prev--;
    if (next >= nums.length || prev < 0) continue;
    if (nums[i] > nums[prev] && nums[i] > nums[next]) count++;
    if (nums[i] < nums[prev] && nums[i] < nums[next]) count++;
  }
  console.log("Valleys and Hills are  ", count);
}
```

---

## 🎯 **Session 2: Array Operations**

### 🧮 Question 1: Generate and Print Array
**Goal:** Create an array of a given size with random numbers.  
**Code:**  
```javascript
function Question1() {
  let size = 5;
  let arr = new Array(size);

  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  console.log("Array: ", arr);
}
```

---

### ➕ Question 2: Sum of Array Elements
**Goal:** Calculate the sum of all elements in an array.  
**Code:**  
```javascript
function Question2() {
  let arr = [10, 20, 30, 40, 50];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
```

---

### 🔝 Question 3: Find Maximum Element
**Goal:** Find the largest number in the array.  
**Code:**  
```javascript
function Question3() {
  let arr = [10, 20, 30, 40, 50];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[0]) max = arr[i];
  }
  console.log("Maximum element: ", max);
}
```

---

### 🥇🥈 Question 4: Find First and Second Maximum
**Goal:** Identify the two largest elements in an array.  
**Code:**  
```javascript
function Question4() {
  arr = [10, 20, 30, 40, 50];
  let max = arr[0] > arr[1] ? arr[0] : arr[1];
  let max2 = arr[0] < arr[1] ? arr[0] : arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    }
    if (arr[i] > max && arr[i] > max2) max2 = arr[i];
  }

  console.log("1st Max element is ", max);
  console.log("2nd Max element is ", max2);
}
```

---

## 💡 Key Takeaways
- Sorted arrays simplify operations like counting pairs or finding max elements.
- Nested loops can efficiently solve complex conditions (e.g., divisible indices).
- Arrays are versatile for implementing diverse algorithms.

---

### 📝 **Notes**
1. Sorting arrays before operations often reduces complexity.
2. Use modular arithmetic for pair-based problems.
3. Practice identifying edge cases like duplicate values or array boundaries.

---

### 🌟 **Next Steps**
- Review today’s exercises and optimize the algorithms further.
- Explore additional scenarios for valleys and hills.
- Try dynamic input for all problems.

---

**Keep Coding & Keep Growing!** 🚀

