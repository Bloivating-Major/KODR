# 📘 Week 11 - Day 2: Session 1 - DSA with Recursion 🚀

Today, we continued our journey into **recursion** by exploring more advanced and interesting problems. Recursion is like magic—it simplifies complex problems by breaking them into smaller, self-similar problems. Let's dive into what we learned! 🌟  

---

## 🧠 **Topics Covered**

### 1️⃣ **Sum of First N Terms**  
We calculated the sum of the first `N` natural numbers using recursion.  

#### 🔍 **Problem**  
Find the sum of the first `N` terms:  
Sum = \( 1 + 2 + 3 + ... + N \)  

#### 💻 **Code**  
```javascript
let n = 5;

console.log(sumNTerm(n));

function sumNTerm(n) {
    if (n == 1) return 1; // Base case
    return n + sumNTerm(n - 1); // Recursive case
}
```

#### ✅ **Output**  
For \( N = 5 \):  
Sum = 1 + 2 + 3 + 4 + 5 = **15**  

---

### 2️⃣ **Factorial of N Terms**  
We computed the factorial of a number using recursion.  

#### 🔍 **Problem**  
Factorial (\( n! \)) = \( n \times (n-1) \times (n-2) \times ... \times 1 \)  

#### 💻 **Code**  
```javascript
let n = 5;

console.log(factOfNTerms(n));

function factOfNTerms(n) {
    if (n == 1) return 1; // Base case
    return n * factOfNTerms(n - 1); // Recursive case
}
```

#### ✅ **Output**  
For \( N = 5 \):  
Factorial = \( 5 \times 4 \times 3 \times 2 \times 1 = **120** \)  

---

### 3️⃣ **Sum of Digits**  
We calculated the sum of the digits of a number using recursion.  

#### 🔍 **Problem**  
For a number \( 12345 \), find the sum of its digits:  
Sum = \( 1 + 2 + 3 + 4 + 5 \)  

#### 💻 **Code**  
```javascript
let digit = 12345;

console.log(sumOfDigits(digit));

function sumOfDigits(digit) {
    if (digit == 0) return digit; // Base case
    return (digit % 10) + sumOfDigits(Math.floor(digit / 10)); // Recursive case
}
```

#### ✅ **Output**  
For \( 12345 \):  
Sum = \( 1 + 2 + 3 + 4 + 5 = **15** \)  

---

### 4️⃣ **Reverse a Digit**  
We reversed a number using recursion.  

#### 🔍 **Problem**  
Reverse the digits of \( 123 \) to get \( 321 \).  

#### 💻 **Code**  
```javascript
let digit = 123;

let rev = 0;
console.log(reverseDigit(digit, rev));

function reverseDigit(digit, rev) {
    if (digit == 0) return rev; // Base case
    let rem = digit % 10;
    rev = (rev * 10) + rem;
    return reverseDigit(Math.floor(digit / 10), rev); // Recursive case
}
```

#### ✅ **Output**  
For \( 123 \):  
Reversed = \( 321 \)  

---

### 5️⃣ **Fibonacci Series Using Recursion**  
We generated the Fibonacci series using recursion.  

#### 🔍 **Problem**  
Fibonacci sequence: \( 0, 1, 1, 2, 3, 5, 8, ... \)  

#### 💻 **Code**  
```javascript
let num = 6;

console.log(fibonacci(num));

function fibonacci(num) {
    if (num == 0 || num == 1) return num; // Base cases
    return fibonacci(num - 1) + fibonacci(num - 2); // Recursive case
}
```

#### ✅ **Output**  
For \( N = 6 \):  
Fibonacci(6) = **8**  

---

## 🌟 **Highlights of the Day**  
- Learned how recursion simplifies problems like **factorial**, **digit sum**, and **Fibonacci series**.  
- Applied recursion creatively to **reverse digits** and solve complex problems.  
- Strengthened problem-solving skills by breaking down large problems into smaller, manageable chunks.  

---

## 🎯 **What’s Next?**  
- Explore **advanced recursion problems** like tower of Hanoi, permutations, and maze solving.  
- Combine recursion with **memoization** for optimization.  

---

🌈 **Recursion is like peeling layers of an onion—each step brings you closer to the core solution.** Keep practicing, and you'll master it in no time! 🚀