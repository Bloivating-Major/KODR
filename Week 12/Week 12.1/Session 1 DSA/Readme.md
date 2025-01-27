# 🌟 Week 12 - Day 1: DSA Session 1  

Today, we explored the **Sieve of Eratosthenes**, a highly efficient algorithm for finding all prime numbers up to a given number. Here's everything we covered! 🚀  

---

## 🧠 **Key Concept: Sieve of Eratosthenes**  

The **Sieve of Eratosthenes** is an algorithm to find all prime numbers up to a given integer `n`. It's efficient with a time complexity of **O(n log log n)**, making it suitable for large values of `n`.  

---

## 📜 **Code Implementation**  

### 🔢 **Question 1: Generate All Prime Numbers Up to `n`**  

#### **Algorithm Steps**:  
1. Create a boolean array of size `n + 1`, initialized to `true`.  
2. Start from `2` (the first prime number) and iterate up to `sqrt(n)`.  
3. For each number that is still marked `true`, mark all its multiples as `false`.  
4. The numbers that remain `true` are prime numbers.  

#### **Code**:  
```javascript
function Question1() {
    // Sieve of Eratosthenes
    let num = 30; // Find all prime numbers up to 30

    checkPrime(num);

    function checkPrime(num) {
        let arr = new Array(num + 1).fill(true); // Create a boolean array
        arr[0] = arr[1] = false; // 0 and 1 are not prime numbers

        // Mark multiples of each number starting from 2
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (arr[i] === true) {
                for (let j = i * i; j <= num; j += i) {
                    arr[j] = false; // Mark multiples as non-prime
                }
            }
        }

        // Print all prime numbers
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] === true) {
                console.log(i + " ");
            }
        }
    }
}

Question1();
```

---

## 📊 **Example Walkthrough**  

### **Input**: `num = 30`  
### **Process**:  
1. **Initialization**: Create an array `arr` of size `31` (0 to 30), all initialized to `true`.  
2. **Mark Non-Primes**:  
   - Start with `i = 2`. Mark multiples of `2` as `false` (`4, 6, 8, ...`).  
   - Move to `i = 3`. Mark multiples of `3` as `false` (`9, 12, 15, ...`).  
   - Skip `i = 4` (already marked `false`).  
   - Continue until `i = sqrt(30)`.  
3. **Output Primes**: The indices where `arr[i]` is still `true` are prime numbers.  

### **Output**:  
Prime numbers up to 30:  
`2, 3, 5, 7, 11, 13, 17, 19, 23, 29`.  

---

## ✨ **Key Takeaways**  

1. **Efficiency**:  
   - Instead of checking each number individually, we eliminate non-prime numbers in bulk.  
   - Time complexity: **O(n log log n)**.  

2. **Space Optimization**:  
   - We use a simple array to keep track of prime and non-prime numbers.  

3. **Real-Life Applications**:  
   - Cryptography: Prime numbers are crucial for encryption algorithms like RSA.  
   - Number theory problems in competitive programming.  

---

## 🔍 **Why Is This Algorithm Important?**  

- **Simplifies Prime Checking**: Quickly identifies all prime numbers in a range.  
- **Foundation for Advanced Concepts**: Used in algorithms that require prime numbers, such as factorization and modular arithmetic.  

---

## 🧩 **What's Next?**  

In upcoming sessions, we’ll expand on this by exploring:  
- Prime factorization.  
- GCD and LCM using prime numbers.  
- Modular arithmetic and its applications.  

Keep learning and stay curious! 🚀  