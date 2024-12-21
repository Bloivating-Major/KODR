# **Array Manipulation with JavaScript** 🚀

This project demonstrates various operations on arrays, showcasing fundamental concepts in JavaScript. Each function represents a unique problem and its solution, providing practical examples of array manipulation and logic building.

---

## **📚 Topics Covered**

### **1. Array Creation and Input**  
**Function**: `question1`  
- Create an array by taking input from the user.
- Dynamically populate the array using a loop.
  
```javascript
function question1() {
  let arr = [];
  let size = Number(prompt("Enter a number: "));
  for (let i = 0; i < size; i++) {
    arr[i] = prompt("Enter a number: ");
  }
  console.log("Array: ", arr);
}
```

---

### **2. Sum of Array Elements**  
**Function**: `question2`  
- Calculate the sum of all elements in an array.  
- Loop through the array and accumulate the sum.  

```javascript
function question2() {
  let arr = [10, 20, 30, 40, 50];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of Array is: ", sum);
}
```

---

### **3. Maximum Element in Array**  
**Function**: `question3`  
- Find the maximum element in the array by iterating and comparing values.

```javascript
function question3() {
  let arr = [10, 20, 30, 40, 50];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log("Max number in Array is: ", max);
}
```

---

### **4. Second Maximum Element in Array**  
**Function**: `question4`  
- Identify the second largest element using two variables: `max` and `secondMax`.

```javascript
function question4() {
  let arr = [10, 20, 30, 40, 50];
  let max = Math.max(arr[0], arr[1]);
  let secondMax = Math.min(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    else if (arr[i] > secondMax && arr[i] < max) secondMax = arr[i];
  }
  console.log("Max number in Array is: ", max);
  console.log("Second Max number in Array is: ", secondMax);
}
```

---

### **5. Check if Array is Sorted**  
**Function**: `question5`  
- Determine if the array is sorted in ascending order.

```javascript
function question5() {
  let arr = [1, 1, 3, 5, 6, 7];
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }
  if (isSorted) console.log("Sorted");
  else console.log("Not Sorted");
}
```

---

### **6. Left Shift Array**  
**Function**: `question6`  
- Perform a left shift operation on the array.

```javascript
function question6() {
  let arr = [10, 20, 30, 40, 50];
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}
```

---

### **7. Right Shift Array**  
**Function**: `question7`  
- Perform a right shift operation on the array.

```javascript
function question7() {
  let arr = [10, 20, 30, 40, 50];
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  console.log(arr);
}
```

---

## **🌟 Key Learnings**
- **Array Basics**: Creating arrays and dynamically populating them.
- **Iterative Operations**: Using loops to process array elements.
- **Logical Thinking**: Solving problems like finding the maximum, checking sorted order, and shifting elements.
- **Built-in Methods**: Utilizing methods like `Math.max` and `Math.min`.

---

## **🎯 Practice Problems**
- Modify the array functions to work with user-defined arrays.
- Add error handling for invalid inputs.
- Extend the functionality to support descending order sorting checks or rotations by `k` steps.

---

This project demonstrates the foundational skills needed for working with arrays, a crucial part of mastering JavaScript! 🚀