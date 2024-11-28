
---

# **JavaScript Problem Solving - Advanced Number Operations**

This repository contains solutions to advanced number-based problems using JavaScript. Each task demonstrates logical thinking, mastery of loops, and implementation of mathematical concepts.

---

## **📂 Task Overview**

| **Task**                           | **Description**                                  |
|------------------------------------|------------------------------------------------|
| **Task 20: Sum of Digits**         | Calculate the sum of digits of a number.       |
| **Task 21: Reverse a Number**      | Reverse a number without trailing zeros.       |
| **Task 22: Palindrome Check**      | Check if a number is a palindrome.             |
| **Task 23: Strong Number Check**   | Check if a number is a strong number.          |
| **Task 24: Automorphic Number Check** | Check if a number is automorphic.              |
| **Task 25: Single Digit**          | Sum digits repeatedly until the result is a single digit. |

---

## **📝 Task Summaries**

### **Task 20: Sum of Digits**
- **Objective**: Calculate the sum of all digits in a number.
- **Example**:  
  Input: `123`  
  Output: `6`  
- **Key Concepts**:  
  - **Arithmetic Operators**: `%` to get the last digit, `/` to reduce the number.
  - **Loops**: Used `while` to iterate through digits.

---

### **Task 21: Reverse a Number**
- **Objective**: Reverse a given number, ensuring no trailing zeros.
- **Example**:  
  Input: `123`  
  Output: `321`  
- **Key Concepts**:  
  - **Arithmetic Operations**: `%` and `/` for reversing logic.
  - **Loops**: Used `while` to build the reversed number.

---

### **Task 22: Palindrome Check**
- **Objective**: Determine if a number reads the same backward and forward.
- **Example**:  
  Input: `121`  
  Output: `"Palindrome"`  
- **Key Concepts**:  
  - **Reverse Logic**: Built using arithmetic operations.
  - **Comparison**: Checked the reversed number against the original.

---

### **Task 23: Strong Number Check**
- **Objective**: Check if a number is a strong number. A strong number equals the sum of the factorial of its digits.  
- **Example**:  
  Input: `145`  
  Output: `"Strong number"`  
- **Key Concepts**:  
  - **Factorial Calculation**: Implemented using a helper function.
  - **Arithmetic Operations**: `%` and `/` for digit extraction.

---

### **Task 24: Automorphic Number Check**
- **Objective**: Verify if a number is automorphic. A number is automorphic if it appears at the end of its square.  
- **Example**:  
  Input: `25`  
  Output: `"Automorphic number"`  
- **Key Concepts**:  
  - **Square Calculation**: Used `Math.pow` for exponentiation.
  - **Digit Matching**: Verified the last digits of the square.

---

### **Task 25: Single Digit**
- **Objective**: Continuously sum the digits of a number until the result becomes a single digit.
- **Example**:  
  Input: `6758`  
  Output: `8`  
  **Process**:  
  - Step 1: `6 + 7 + 5 + 8 = 26`  
  - Step 2: `2 + 6 = 8`  

- **Key Concepts**:  
  - **Loops**: Used `while` to repeatedly sum digits until a single-digit number is obtained.  
  - **Arithmetic Operators**: `%` to extract digits, `/` to reduce the number.

---

## **💡 Key Learnings**

1. **Control Structures**:  
   - Mastered `while` loops for iterative digit processing.
   - Used `if-else` for conditional checks.

2. **Mathematical Operations**:  
   - Leveraged `%` for extracting digits and `/` for reducing numbers.  
   - Applied `Math.pow` for automorphic checks.

3. **Helper Functions**:  
   - Created reusable functions like `factorial` and `sumOfDigits` to simplify calculations.

4. **Problem-Solving Skills**:  
   - Addressed real-world mathematical problems with logical thinking.

---

## **🚀 How to Run**

1. Copy the code snippets into your favorite editor or browser console.
2. Execute the code and provide the required input when prompted.

---
