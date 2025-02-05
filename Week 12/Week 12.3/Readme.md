## 🚀 Week 12 - Day 3: **Backend - User Authentication (Login & Registration) 🛡️**  

### **📌 What We Learned Today**
Today, we implemented **User Authentication** 🔐 using **Node.js, Express, MongoDB, and Bcrypt**.  
✅ **User Registration with Hashed Passwords 📝**  
✅ **User Login with Password Validation 🔑**  
✅ **Security Best Practices with Bcrypt 🔄**  

---

## **🛠️ Steps to Implement**
1️⃣ **User Registration** 📌  
- Accepts `username`, `email`, and `password`.  
- Hashes the password using **bcrypt**.  
- Stores the user in **MongoDB**.  

2️⃣ **User Login** 📌  
- Accepts `email` and `password`.  
- Verifies email exists in the database.  
- Compares password hash using **bcrypt.compare()**.  
- Returns **success** or **error** message.  

---

## **📝 Backend Implementation (Controller)**
```javascript
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// 📝 User Registration Controller
module.exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  // 🔐 Hashing the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // 📌 Creating a new user in the database
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    user,
    message: "✅ User created successfully!",
  });
};

// 🔑 User Login Controller
module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 📌 Checking if user exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "❌ Invalid Email or Password" });
    }

    // 🔄 Verifying password
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ message: "❌ Invalid Email or Password" });
    }

    res.status(200).json({ message: "✅ User login successful!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
```

---

## **📌 How Does It Work?**
🔹 **Registration Process** 📝  
1️⃣ User sends `username`, `email`, and `password`.  
2️⃣ **bcrypt.hash()** encrypts the password.  
3️⃣ User details are stored in MongoDB.  

🔹 **Login Process** 🔑  
1️⃣ User enters email & password.  
2️⃣ System checks if the email exists.  
3️⃣ **bcrypt.compare()** verifies password.  
4️⃣ If correct, user successfully logs in! 🎉  

---

## **🚀 Next Steps**
🔹 **JWT Authentication for Secure Login Tokens 🔑**  
🔹 **Role-Based Access Control (RBAC) for Authorization 👥**  
🔹 **Middleware for Authentication & Protected Routes 🛡️**  

🔹 **Happy Coding! 🚀**

# 🚀 Week 12 - Day 3: DSA Session 2  
## 📌 **Topic: Best Time to Buy and Sell Stock (Leetcode 121)**  

Today, we explored **array-based problems**, particularly focusing on **finding the maximum profit from stock prices**. 📈  

---

## **📝 Problem Statement**  
You are given an array `prices` where `prices[i]` represents the **stock price on the i-th day**.  

👉 **Task:** Find the maximum profit you can achieve by **buying and selling** a stock.  
👉 **Constraint:** You can **only buy before selling** (i.e., transactions should be valid in time).  

---

## **💡 Optimized Approach: One Pass**  
🔹 **Idea:**  
- Track the **lowest price** encountered so far.  
- Compute the **profit** by selling at the current price.  
- Update the **maximum profit** accordingly.  

### **🖥️ Code Implementation**
```javascript
let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    let low = prices[0];  // Store the lowest price found so far
    let profit = 0;  // Store the maximum profit

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i];  // Update lowest price if a smaller value is found
        } 
        else if (profit < prices[i] - low) {
            profit = prices[i] - low;  // Update maximum profit
        }
    }

    return profit;
};

console.log(maxProfit(prices));  // Output: 5
```

---

## **📊 Dry Run & Explanation**
### **Example Input:** `[7, 1, 5, 3, 6, 4]`
| Day | Price | Lowest So Far | Profit Calculation | Max Profit |
|-----|--------|--------------|-------------------|------------|
| 1   | **7**  | 7            | -                 | 0          |
| 2   | **1**  | **1** (update) | -                 | 0          |
| 3   | **5**  | 1            | `5 - 1 = 4`       | **4** (update) |
| 4   | **3**  | 1            | `3 - 1 = 2`       | 4          |
| 5   | **6**  | 1            | `6 - 1 = 5`       | **5** (update) |
| 6   | **4**  | 1            | `4 - 1 = 3`       | 5          |

👉 **Max Profit = 5** (Buy at **1**, Sell at **6**) 🎯  

---

## **⏳ Time Complexity Analysis**  
| Approach        | Time Complexity | Space Complexity |
|----------------|----------------|-----------------|
| **Brute Force (Nested Loop)** | O(N²) | O(1) |
| **Optimized Approach (One Pass)** ✅ | O(N) | O(1) |

🚀 The **optimized solution** achieves **O(N) time complexity**, making it **efficient for large inputs**.

---

## **💡 Key Takeaways**  
✔ **Buy low, sell high** is the key principle.  
✔ Track **minimum price** encountered and update **profit**.  
✔ **One-pass solution (O(N))** is optimal for this problem.  

🔥 **Next Steps:** Practice similar problems involving **arrays & dynamic programming** to reinforce your understanding.  

Keep coding! 🚀💡