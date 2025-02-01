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

# 🌟 Week 12 - Day 2: Backend Session 2 🌟  
Today, we explored **Authentication**, **Authorization**, **Validation**, and **Verification** in backend development. These core concepts ensure the security, functionality, and integrity of applications. 🚀  

---

## 📌 **Key Topics Covered**

### 1️⃣ **Authentication**  
**What is Authentication?**  
Authentication is about verifying **who the user is**. There are two main types:  
1. **Token-Based Authentication**  
   - Commonly used in **REST APIs**.
   - Involves the creation and verification of tokens like **JWT (JSON Web Tokens)**.  
2. **Session-Based Authentication**  
   - Used in older systems where sessions are maintained on the server.  

---

### 🔧 **Implementing Token-Based Authentication**  
#### **Required Package Installation**  
```bash
npm install jsonwebtoken bcrypt
```  

---

#### 🔒 **Encryption and Decryption**  
**Encryption**: Converting plaintext to unreadable ciphertext.  
- Example: `"Hello"` → `"jgnnq"`  

**Decryption**: Converting ciphertext back to plaintext.  
- Example: `"jgnnq"` → `"Hello"`  

**Hashing**: A one-way process; data cannot be reverted to plaintext.  

---

#### 💻 **Example: Using `bcrypt` for Hashing and Comparing**  

```javascript
const bcrypt = require("bcrypt");

async function encryptPassword(plainTextPassword) {
  // Hash the plain text password
  const hashedPassword = await bcrypt.hash(plainTextPassword, 10);
  console.log("Hashed Password:", hashedPassword);

  // Compare the plain text password with the hashed password
  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  console.log("Password Match:", isMatch);
}

// Test the function
encryptPassword("MySecretPassword");
```

---

### 2️⃣ **Authorization**  
**What is Authorization?**  
Authorization determines **what actions a user can perform**.  
- Example:  
  - An admin can create, update, or delete users.  
  - A regular user can only view their own data.  

---

### 3️⃣ **Validation**  
**What is Validation?**  
Validation ensures the **data format** provided by the user is correct.  
- Example:  
  - Validating an email address format: `user@example.com`.  
  - Checking if a required field is filled.  

---

### 4️⃣ **Verification**  
**What is Verification?**  
Verification ensures the information provided is **correct and matches** the records in our application.  
- Example:  
  - OTP-based email verification.  
  - Checking if a user’s email exists in the database before allowing login.  

---

## 💡 **Key Concepts in Action**  

### 🛠️ **Flow of Authentication and Authorization**
1. **User Sign-Up**:  
   - Password is hashed using `bcrypt.hash()`.  
   - Data is saved in the database.  

2. **User Login**:  
   - Input password is compared with the hashed password in the database using `bcrypt.compare()`.  
   - On successful match, a **JWT token** is generated using `jsonwebtoken`.  

3. **Accessing Protected Routes**:  
   - The token is sent in the request header.  
   - The server validates the token to authorize the user's actions.  

---

### 🛠️ **JWT Implementation Example**  

#### **Generate Token**  
```javascript
const jwt = require("jsonwebtoken");

function generateToken(user) {
  const token = jwt.sign({ id: user.id, email: user.email }, "secret_key", {
    expiresIn: "1h", // Token valid for 1 hour
  });
  return token;
}

// Example usage
const user = { id: 1, email: "user@example.com" };
console.log("Generated Token:", generateToken(user));
```

#### **Verify Token**  
```javascript
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, "secret_key");
    console.log("Decoded Token:", decoded);
  } catch (err) {
    console.error("Invalid Token:", err.message);
  }
}

// Example usage
const token = generateToken(user);
verifyToken(token);
```

---

## 🚀 **Takeaways**
1. **Authentication** ensures the **identity** of the user.  
2. **Authorization** determines what a user can or cannot do.  
3. **Validation** checks if the provided data is **properly formatted**.  
4. **Verification** confirms if the data is **correct** and matches records.  
5. Learned **bcrypt** for hashing passwords and **jsonwebtoken** for token-based authentication.  

---

### 📌 **Practical Applications**  
- **Sign-Up/Login Systems**.  
- **Role-Based Access Control** for admin, users, etc.  
- **Secure APIs** with **JWT tokens**.  

---

**🌟 Keep Learning! Secure coding is the backbone of robust applications. 🌟**  