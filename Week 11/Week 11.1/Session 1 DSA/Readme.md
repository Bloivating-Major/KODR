# 📝 Week 11 - Day 1: **DSA Recursion in JavaScript**  

Today, we explored the concept of **Recursion** in JavaScript. Recursion is an essential programming technique where a function calls itself to solve a problem. Here’s a detailed recap of our learning journey, examples, and implementations. 🚀  

---

## 🌟 **What is Recursion?**  
Recursion is a technique where a function calls itself to solve smaller instances of the same problem.  
Every recursive function must have:  
1. **Base Case**: The condition under which the recursion stops.  
2. **Recursive Case**: The part where the function calls itself.  

---

## 🧩 **Topics Covered**

### 1️⃣ **Understanding Function Calls**  
To warm up, we wrote a simple set of nested functions to understand the order of function execution.  
**Example:**  
```javascript
function main() {
    greet();
    console.log("Function Main");
}

function greet() {
    enjoy();
    console.log("Function Greet");
}

function enjoy() {
    console.log("Function Enjoy");
}

main(); // Call the main function
```

**Output:**  
```
Function Enjoy  
Function Greet  
Function Main  
```

**Key Takeaway:** Functions execute in the order they are called, and the control returns to the calling function after execution.  

---

### 2️⃣ **Printing Using Recursion**  

#### 🔸 **Printing "Hello World" N Times**  
**Problem:** Print "Hello World" `n` times using recursion.  
**Solution:**  
```javascript
function printHello(n) {
    if (n == 0) return; // Base Case
    console.log("Hello World");
    printHello(n - 1); // Recursive Case
}

printHello(5);
```

**Output:**  
```
Hello World  
Hello World  
Hello World  
Hello World  
Hello World  
```

---

#### 🔸 **Printing Numbers from N to 1**  
**Problem:** Print numbers from `n` to `1` using recursion.  
**Solution:**  
```javascript
function printNumber(n) {
    if (n == 0) return; // Base Case
    console.log(n);
    printNumber(n - 1); // Recursive Case
}

printNumber(5);
```

**Output:**  
```
5  
4  
3  
2  
1  
```

---

#### 🔸 **Printing Numbers from 1 to N**  
**Problem:** Print numbers from `1` to `n` using recursion.  
**Solution:**  
```javascript
function printNumberFrom1(n) {
    if (n == 0) return; // Base Case
    printNumberFrom1(n - 1); // Recursive Case
    console.log(n);
}

printNumberFrom1(5);
```

**Output:**  
```
1  
2  
3  
4  
5  
```

---

### 3️⃣ **Mathematical Problems with Recursion**  

#### 🔸 **Factorial of N**  
**Problem:** Calculate the factorial of a number `n` using recursion.  
**Formula:** `n! = n * (n-1)!`  
**Solution:**  
```javascript
function factorial(n) {
    if (n == 0) return 1; // Base Case
    return n * factorial(n - 1); // Recursive Case
}

console.log(factorial(5)); // Output: 120
```

---

#### 🔸 **Sum of Numbers from 1 to N**  
**Problem:** Find the sum of all numbers from `1` to `n`.  
**Solution:**  
```javascript
function sumOfNumbers(n) {
    if (n == 0) return 0; // Base Case
    return n + sumOfNumbers(n - 1); // Recursive Case
}

console.log(sumOfNumbers(5)); // Output: 15
```

---

### 📊 **Comparison Between Iterative and Recursive Approaches**

| Feature                 | Iterative                              | Recursive                              |
|-------------------------|----------------------------------------|----------------------------------------|
| **Definition**          | Uses loops (e.g., `for`, `while`)      | Function calls itself                  |
| **Code Complexity**     | Usually simpler                       | Can be concise but harder to debug     |
| **Base Case Required**  | No                                     | Yes                                    |
| **Stack Usage**         | No extra stack usage                  | Uses call stack                        |

---

## 📝 **Takeaways**  
1. **Recursion Mastery:**  
   - Recursion is like a loop but uses the function call stack.  
   - Always define a **base case** to prevent infinite recursion.  

2. **Common Patterns:**  
   - Recursive functions often involve solving a smaller instance of the same problem.  
   - **Divide and Conquer:** Break the problem into smaller subproblems (e.g., factorial, sum).  

3. **Benefits of Recursion:**  
   - Simpler and cleaner code for problems like traversing trees, solving mathematical problems, etc.  

4. **Caution:**  
   - Avoid deep recursion to prevent **stack overflow**.  

---

🎉 **Happy Coding!** Keep practicing to master recursion, as it’s a critical concept in DSA and problem-solving! 💪  