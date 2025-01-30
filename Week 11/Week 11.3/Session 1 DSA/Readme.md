# 🚀 Week 11 - Day 3: DSA Session 1  
## 📌 **Topic: Recursion - Factorials, GCD, and Finding Factors**  

Today, we explored **recursion** in depth and learned how to solve problems like **factorial computation, GCD (Greatest Common Divisor), and finding factors of a number** using recursion. 🔥  

---

## **🔢 Finding the GCD (Greatest Common Divisor) Using Recursion**  
The **GCD (HCF - Highest Common Factor)** of two numbers is the largest number that divides both numbers completely.  

### **Approach 1: Iterative Recursive Method**  
- Start from the **minimum of two numbers** and check divisibility.
- Decrease the divisor (`c`) until the GCD is found.  

```javascript
let a = 20;
let b = 32;
let c = a < b ? a : b;

console.log(findGCD(a, b, c));

function findGCD(a, b, c) {
    if (c == 1) return c;
    if (a % c == 0 && b % c == 0) return c;
    return findGCD(a, b, c - 1);
}
```
⏳ **Time Complexity:** `O(min(a, b))`

---

### **Approach 2: Using Euclidean Algorithm (Optimized)**  
🔹 The Euclidean algorithm **reduces the problem** by subtracting the smaller number from the larger one.  
🔹 This is **much faster** than iterating from min(a, b) downwards.  

```javascript
console.log(GCD(20, 32));

function GCD(a, b) {
    if (a == b) return a; 
    if (a > b) return GCD(a - b, b);
    else return GCD(a, b - a);
}
```
🔹 **Time Complexity:** `O(log(min(a, b)))`  
✔ **Most efficient way** to find GCD using recursion! ✅  

---

## **🔄 Printing Numbers Using Recursion**  
This function prints numbers from **n to 1** recursively. 📉  

```javascript
let n = 5;
temp(n);

function temp(n) {
    if (n == 0) return;
    console.log(n);
    temp(--n);
}
```
✔ This function **decrements** `n` until `0` is reached.  

---

## **🧩 Finding Factors of a Number Using Recursion**  
🔹 A factor of `n` is any number that **divides `n` completely**.  
🔹 We recursively check divisibility starting from `1`.  

### **Method 1: Checking from 1 to n/2**
```javascript
let n = 50;
factor(n, 1);

function factor(n, i) {
    if (n % i == 0) console.log(i); // Print factor
    if (i > Math.floor(n / 2)) {
        console.log(n); // Print n itself as a factor
        return;
    }
    factor(n, i + 1);
}
```
✔ **Time Complexity:** `O(n/2)`  

---

### **Method 2: Optimized Factorization (Using sqrt(n))**  
Instead of checking all numbers **up to `n/2`**, we **only go up to `sqrt(n)`**, which is **more efficient**.  

```javascript
function printFactors(n) {
    let result = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                result.push(i);
            } else {
                result.push(i);
                result.push(n / i);
            }
        }
    }
    result.sort((a, b) => a - b);
    console.log(result.join(", "));
}

printFactors(50);
```
✔ **Time Complexity:** `O(√n)` (Much Faster!)  

---

## **🔑 Key Takeaways**  
✅ **Recursion is a powerful concept** that helps break problems into smaller instances of the same problem.  
✅ **GCD can be optimized** using the **Euclidean algorithm**.  
✅ **Factorization can be optimized** by checking **only up to `sqrt(n)`** instead of `n/2`.  

🔥 Keep practicing recursion, and you'll master it in no time! 🚀💡