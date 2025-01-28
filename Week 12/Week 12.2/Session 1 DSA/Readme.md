# 🌟 Week 12 - Day 2: DSA Session 1  
In today's **Data Structures and Algorithms (DSA)** session, we explored **recursion and mathematical computation** by solving a problem involving **exponentiation using recursion**. 🚀  

---

## ✍️ **Question 1: Efficient Power Calculation**  

### 🛠️ **Problem Statement**  
Given two numbers, `x` (base) and `n` (exponent), calculate \(x^n\) efficiently using recursion.  
- If \(n = 0\), return **1** (base case).  
- For negative exponents, return the reciprocal of \(x^n\).  
- Utilize the **divide and conquer** approach to minimize the number of computations.  

---

### 🔍 **Approach**  

1. **Base Case:**  
   - If \(n = 0\), the result is **1.0** because any number raised to the power 0 is 1.  

2. **Recursive Case:**  
   - Use **divide and conquer** to split the problem into smaller subproblems:  
     - Compute \(x^{n/2}\), and use the result to calculate \(x^n\).  

3. **Odd vs. Even Exponents:**  
   - If \(n\) is even, \(x^n = (x^{n/2})^2\).  
   - If \(n\) is odd, \(x^n = (x^{n/2})^2 \times x\).  

4. **Handle Negative Exponents:**  
   - For \(n < 0\), return \(1 / x^n\).  

---

### 💻 **Code Implementation**  

```javascript
function Question1() {
  let x = 2, // Base
    n = 10; // Exponent
  
  if (n === 0) return 1.0; // Base case: x^0 = 1

  let ans = 1; 
  if (n < 0) {
    ans = 1 / solve(x, -n); // Handle negative exponents
  } else {
    ans = solve(x, n); // Positive exponents
  }
  return ans;

  function solve(x, n) {
    if (n === 0) return 1.0; // Base case for recursion
    let s = solve(x, Math.floor(n / 2)); // Divide the problem into smaller subproblems
    if (n % 2 === 0) return s * s; // If n is even
    return s * s * x; // If n is odd
  }
}

console.log(Question1());
```

---

### 🔗 **Explanation of the Code**  

1. **Input:**  
   - \(x = 2, n = 10\)  

2. **Process:**  
   - Call the recursive function `solve(x, n)` to compute \(x^n\):  
     - If \(n = 0\), return **1.0** (base case).  
     - Otherwise, compute \(x^{n/2}\) recursively.  
     - Multiply the result based on whether \(n\) is odd or even.  

3. **Output:**  
   - \(x = 2, n = 10 \implies 2^{10} = 1024\).  

---

### ✅ **Key Concepts Learned**  

- **Divide and Conquer:**  
  Efficiently split the problem to minimize the number of recursive calls.  

- **Recursive Power Calculation:**  
  Compute powers with a time complexity of \(O(\log n)\) instead of \(O(n)\).  

- **Handling Edge Cases:**  
  Properly handle negative exponents and base cases.  

---

### 🔢 **Example Outputs**

| Input        | Output   | Explanation                       |
|--------------|----------|-----------------------------------|
| \(x = 2, n = 10\) | 1024.0   | \(2^{10} = 1024\)                |
| \(x = 2, n = -2\) | 0.25     | \(2^{-2} = 1 / (2^2) = 0.25\)    |
| \(x = 5, n = 0\)  | 1.0      | Any number raised to 0 is 1.    |

---

### 🌟 **Takeaways**

- Recursion can drastically reduce computation time using **divide and conquer**.  
- Efficiently handling edge cases (e.g., \(n = 0, n < 0\)) is essential in algorithm design.  
- This problem helps strengthen understanding of recursion and mathematical problem-solving in DSA.  

Keep practicing, and let's conquer more challenging problems! 🚀💻  