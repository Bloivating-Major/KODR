
# **JavaScript Problem Solving - Self Study**

This document summarizes the JavaScript problems solved and concepts learned during the self-study session. The tasks range from mathematical computations to conditional logic and iterative loops, showcasing practical problem-solving skills.

---

## **📂 Overview**

| **Question No.** | **Problem Description**                                   |
|-------------------|-----------------------------------------------------------|
| **7**            | Calculate the area of a triangle using Heron's formula.   |
| **8**            | Determine the greatest number between two inputs.         |
| **9**            | Check if a number is even or odd.                         |
| **12**           | Determine if a year is a leap year.                       |
| **13**           | Calculate electricity bill based on tiered rates.         |
| **14**           | Calculate discounts based on purchase total.              |
| **15**           | Print "Hello World" n times.                              |
| **16**           | Print the first n natural numbers.                        |
| **17**           | Calculate the sum of the first n natural numbers.         |
| **18**           | Calculate the factorial of a number.                      |
| **20**           | Sum the digits of a number.                               |
| **21**           | Reverse the digits of a number.                           |

---

## **📝 Problem Summaries**

### **7. Area of Triangle (Heron's Formula)**
```javascript
let length1 = parseInt(prompt("Enter Length of Side 1 of Triangle: "));
let length2 = parseInt(prompt("Enter Length of Side 2 of Triangle: "));
let length3 = parseInt(prompt("Enter Length of Side 3 of Triangle: "));

let semiPerimeter = (length1 + length2 + length3) / 2;

let area = Math.sqrt(
  semiPerimeter *
    (semiPerimeter - length1) *
    (semiPerimeter - length2) *
    (semiPerimeter - length3)
);

console.log(`Area of Triangle = ${area.toFixed(3)} sq units`);
```

---

### **8. Greatest Between Two Numbers**
```javascript
let num1 = parseInt(prompt("Enter Number 1: "));
let num2 = parseInt(prompt("Enter Number 2: "));

console.log(
  `Greatest between ${num1} and ${num2} is ${num1 > num2 ? num1 : num2}`
);
```

---

### **9. Even or Odd**
```javascript
let number = parseInt(prompt("Enter Number: "));
console.log(
  `${number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`}`
);
```

---

### **12. Leap Year**
```javascript
let year = parseInt(prompt("Enter a Year: "));

if (isNaN(year) || year <= 0) {
  console.log("Invalid input. Please enter a positive integer.");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
```

---

### **13. Electricity Bill**
```javascript
let unitsConsumed = parseInt(prompt("Enter Units Consumed: "));

if (isNaN(unitsConsumed) || unitsConsumed < 0) {
  console.log("Please enter a valid positive number for units consumed.");
} else {
  let totalBill = 0;

  if (unitsConsumed <= 100) {
    totalBill = unitsConsumed * 4.2;
  } else if (unitsConsumed <= 200) {
    totalBill = 100 * 4.2 + (unitsConsumed - 100) * 6;
  } else if (unitsConsumed <= 400) {
    totalBill = 100 * 4.2 + 100 * 6 + (unitsConsumed - 200) * 8;
  } else {
    totalBill = 100 * 4.2 + 100 * 6 + 200 * 8 + (unitsConsumed - 400) * 13;
  }
  console.log(`Total bill amount: ${totalBill.toFixed(2)} rs`);
}
```

---

### **14. Shop Discount**
```javascript
let totalPrice = parseInt(prompt("Enter Total Price: "));
let discount = 0;

if (isNaN(totalPrice) || totalPrice < 0) {
  console.log("Invalid input. Please enter a positive number for total price.");
} else {
  if (totalPrice > 0 && totalPrice <= 5000) {
    discount = 0;
  } else if (totalPrice > 5000 && totalPrice <= 7000) {
    discount = (5 / 100) * totalPrice;
  } else if (totalPrice > 7000 && totalPrice <= 9000) {
    discount = (10 / 100) * totalPrice;
  } else {
    discount = (20 / 100) * totalPrice;
  }
  console.log(`Payable amount is ${totalPrice - discount}`);
}
```

---

### **15. Print "Hello World" n Times**
```javascript
let n = parseInt(prompt("Enter the number of times: "));

for (let i = 0; i < n; i++) {
  console.log("Hello World");
}
```

---

### **16. Print First n Natural Numbers**
```javascript
let n = parseInt(prompt("Enter the number of terms: "));
let result = '';

for (let i = 1; i <= n; i++) {
  result += i + ' ';
}
console.log(result);
```

---

### **17. Sum of First n Numbers**
```javascript
let n = parseInt(prompt("Enter the number of terms: "));
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(`Sum of the first ${n} natural numbers: ${sum}`);
```

---

### **18. Factorial of a Number**
```javascript
let n = parseInt(prompt("Enter the number: "));
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`Factorial of ${n} is: ${factorial}`);
```

---

### **20. Sum of Digits**
```javascript
let n = parseInt(prompt("Enter the number: "));
let original = n;
let sum = 0;

while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(`Sum of digits of ${original} is: ${sum}`);
```

---

### **21. Reverse a Number**
```javascript
let n = parseInt(prompt("Enter the number: "));
let reverse = 0;

while (n > 0) {
  reverse = reverse * 10 + (n % 10);
  n = Math.floor(n / 10);
}

console.log(`Reversed number is: ${reverse}`);
```

---

## **🚀 How to Run**
1. Copy the desired JavaScript code snippet into your editor.
2. Run it in your browser console or any JavaScript runtime (e.g., Node.js).
3. Provide inputs when prompted to test the code.

---

This README includes the **questions**, **explanations**, and corresponding **code snippets**.