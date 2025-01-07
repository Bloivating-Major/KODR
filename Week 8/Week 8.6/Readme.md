# Week 8 - Day 6: DSA Revision Class

Today, we revised key **Data Structures and Algorithms (DSA)** concepts through practical problems and solutions. Below is a detailed summary of the questions solved in the session:

---

## **Question 1: Frequency of Elements in an Array**

### **Problem**
Given an array of integers, count how many times each element appears.

### **Solution**
We used nested loops to count the frequency of each element, marking processed elements as `-1` to avoid double-counting.

#### **Code**
```javascript
function Question1() {
  let arr = [5, 8, 1, 2, 5, 6, 8, 8, 6, 6, 3, 4, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (arr[i] != -1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
          count++;
          arr[j] = -1; // Mark as processed
        }
      }
      console.log(arr[i] + " comes " + count + " times.");
    }
  }
}
```

#### **Output**
```
5 comes 3 times.
8 comes 3 times.
1 comes 1 times.
2 comes 1 times.
6 comes 3 times.
3 comes 1 times.
4 comes 2 times.
```

---

## **Question 2: Subarray Sum Equals K**

### **Problem**
Given an array of integers and a target sum, find how many subarrays have a sum equal to the target.

### **Solution**
We used nested loops to iterate over all possible subarrays and check their sums.

#### **Code**
```javascript
function Question2() {
  let arr = [1, 2, 3, 7, 5, 12];
  let sum = 12;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let ans = 0;
    for (let j = i; j < arr.length; j++) {
      ans += arr[j];
      if (ans == sum) count++;
    }
  }
  console.log("Sum = 12 comes " + count + " times.");
}
```

#### **Output**
```
Sum = 12 comes 2 times.
```

---

## **Question 3: Largest Letter in String with Upper and Lowercase**

### **Problem**
Find the largest letter in a string (case-sensitive) that appears in both uppercase and lowercase.

### **Approach**
- Use two arrays, `lower` and `upper`, to store the frequency of lowercase and uppercase letters.
- Traverse the string to populate the frequency arrays.
- Iterate from `'Z'` to `'A'` and check if the corresponding lowercase and uppercase letters both exist.

#### **Code**
```javascript
function Question3() {
  let s = "AbCdEfGhIjK";
  let lower = new Array(26).fill(0);
  let upper = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      lower[charCode - 97]++;
    }
    if (charCode >= 65 && charCode <= 90) {
      upper[charCode - 65]++;
    }
  }

  for (let i = 25; i >= 0; i--) {
    if (upper[i] > 0 && lower[i] > 0) {
      let char = String.fromCharCode(i + 65);
      return char;
    }
  }
  return "";
}
```

#### **Output**
```
K
```

---

## **Key Learnings**
1. **Frequency Counting**:
   - Used nested loops and array marking for frequency analysis.
2. **Subarray Problems**:
   - Iterated over subarrays to solve for sums equal to a target value.
3. **Character Manipulation**:
   - Applied ASCII manipulation and frequency arrays to solve letter-related problems.

---

### **Practice More**
- Optimize subarray problems using **prefix sums** or **hash maps**.
- Explore space-efficient approaches for frequency counting.
- Implement string manipulation challenges using the **sliding window technique**.

Happy Coding! 🚀