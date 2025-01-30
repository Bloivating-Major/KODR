# 🚀 **Week 11 - Day 5: DSA Session 2**  

## 📌 **Today's Learning - Prime Numbers in JavaScript**  

In this session, we explored **Prime Numbers** and how to efficiently check whether a number is prime using JavaScript. 🔢  

---

## **1️⃣ Basic Approach: Checking Prime Numbers 🧐**  

📌 **Concept:**  
A **Prime Number** is a number greater than `1` that is only divisible by `1` and itself.  
For example: `2, 3, 5, 7, 11, 13, ...` are prime numbers.  

📍 **Naive Approach:** (Loop through half the number and count divisors)  
```javascript
let n = 11;
let count = 0;

if (n <= 1) console.log("Not Prime");
else {
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) count++;
    }
}

if (count == 1) console.log("Prime Number");
```
📝 **Drawbacks:**  
- Inefficient for large numbers.  
- Loops through `n/2`, which is unnecessary.  

---

## **2️⃣ Optimized Approach: Checking Prime Numbers Efficiently 🚀**  

📌 **Concept:**  
- A number `n` is **prime** if it has no divisors other than `1` and itself.  
- We only need to check divisibility up to `sqrt(n)`, because if `n = a * b`, then **one of the factors must be ≤ sqrt(n)**.  

📍 **Optimized Code:**  
```javascript
let n = 11;

if (isPrime(n)) console.log("Prime Number");
else console.log("Not Prime Number");

function isPrime(num) {
    if (num <= 1) return false;  // 0 and 1 are not prime
    if (num == 2) return true;   // 2 is the only even prime
    if (num % 2 == 0) return false; // Exclude all even numbers > 2

    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
        if (num % i == 0) return false; // If divisible, not prime
    }
    return true;
}
```
---

## **🔥 What We Improved?**  
✅ **Reduced Time Complexity** from **O(n/2) → O(sqrt(n))** 💡  
✅ **Eliminated Even Numbers** (except `2`) to reduce unnecessary checks.  
✅ **Optimized for Large Inputs** (e.g., checking primes up to `10^9`).  

---

## **🎯 Summary - What We Learned?**  
✅ **Prime Numbers** and their properties.  
✅ **Naive approach (looping half the number)** for prime checking.  
✅ **Optimized method (checking up to sqrt(n))** for efficiency.  

---

🔥 **Next Steps:**  
- Implement **Prime Factorization** using `O(sqrt(n))` method.  
- Solve **LeetCode Prime Number Questions**.  
- Optimize further using **Sieve of Eratosthenes** (for multiple primes).  

🚀 **Great Work! Keep Practicing!** 🏗️🔥