# **JavaScript Practice: Patterns and Array Manipulations** 🌟

This repository contains solutions to a series of JavaScript practice problems that explore pattern generation, array manipulation, and sorting algorithms. These exercises enhance problem-solving skills and provide a deeper understanding of fundamental concepts in JavaScript.

---

## **📂 Contents**

1. **Pattern Generation**
   - Square Pattern
   - Triangle Pattern (Stars, Numbers, Alphabets)
2. **Array Operations**
   - Sum of Elements
   - Maximum and Second Maximum Elements
   - Bubble Sort Algorithm
   - Checking if an Array is Sorted

---

## **🔢 Pattern Generation**

### **1. Square Pattern**  
Generates a square grid of `*` symbols.  
**Logic**: Nested loops for rows and columns.  

```javascript
function question1() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
```
**Output**:  
```
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
```

---

### **2. Triangle Pattern (Stars)**  
Generates a right-angled triangle of `*`.  
**Logic**: Rows increase in size as the loop progresses.

```javascript
function question2() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
```
**Output**:  
```
* 
* * 
* * * 
* * * * 
* * * * *
```

---

### **3. Triangle Pattern (Numbers)**  
Generates a triangle where each row displays sequential numbers.  

```javascript
function question3() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log();
  }
}
```
**Output**:  
```
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5
```

---

### **4. Triangle Pattern (Alphabets)**  
Generates a triangle where each row displays sequential letters.  

```javascript
function question4() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${String.fromCharCode(65 + j)} `);
    }
    console.log();
  }
}
```
**Output**:  
```
A 
A B 
A B C 
A B C D 
A B C D E
```

---

## **📊 Array Operations**

### **5. Sum of Array Elements**  
Calculates the total sum of all elements in an array.  

```javascript
function question5() {
  let arr = [10, 15, 20, 25, 30];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
```

---

### **6. Maximum Element in Array**  
Finds the largest number in the array.  

```javascript
function question6() {
  let arr = [10, 5, 2, 37, 8];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max);
}
```

---

### **7. Second Maximum Element in Array**  
Finds the second largest number using two variables (`max` and `max2`).  

```javascript
function question7() {
  let arr = [10, 5, 2, 37, 8, 69, 69];
  let max = Math.max(arr[0], arr[1]);
  let max2 = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2 && arr[i] < max) {
      max2 = arr[i];
    }
  }
  console.log("Maximum number is :", max);
  console.log("Second maximum number is :", max2);
}
```

---

### **8. Bubble Sort Algorithm**  
Sorts an array using the bubble sort method.  

```javascript
function question8() {
  let arr = [4, 3, 6, 7, 11, 9];
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
```

---

### **9. Check if Array is Sorted**  
Determines whether the array is sorted in ascending order.  

```javascript
function question9() {
  let arr = [1, 2, 3, 4, 5];
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  console.log(`${isSorted ? "Array is Sorted" : "Array is Not Sorted"}`);
}
```

---

## **📖 Key Learnings**
1. **Pattern Generation**: 
   - Nested loops for rows and columns.
   - Using `process.stdout.write` for precise control over patterns.
2. **Array Operations**: 
   - Traversing arrays with `for` loops.
   - Conditional checks for finding max, second max.
   - Sorting arrays with Bubble Sort.
3. **Logic Building**:
   - Enhanced logical thinking by solving real-world problems.
   - Modularized code for better readability.

---

## **🌟 How to Run**
1. Clone this repository:
   ```bash
   git clone https://github.com/Bloivating-Major/KODR.git
   ```
2. Open the Folder in any JavaScript runtime environment (Node.js or browser console) and go to Week 6/Week 6.7/Session 1 DSA Practice Question
3. Call the desired function:
   ```javascript
   question1(); // For Square Pattern
   question6(); // For Maximum in Array
   ```

---

Master these exercises to sharpen your JavaScript skills! Happy Coding! 🚀