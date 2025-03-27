### 🚀 Week 20 | Day 4 | Session 1  

# 🌍 Google OAuth Integration with JWT 🔐  

## 📌 What I Learned Today  
Today, I **integrated Google OAuth** in the backend using **Node.js, Express, Passport.js, and JWT** to allow users to log in with Google and receive a secure token. 🎉  

---

## 🛠️ Tech Stack  
- **Backend:** Node.js + Express.js  
- **Authentication:** Passport.js + Google OAuth 2.0  
- **Token Management:** JSON Web Token (JWT)  
- **Session Handling:** express-session  
- **Environment Variables:** dotenv  

---

## ✨ Features Implemented  
✅ Google OAuth login 🔑  
✅ Session-less authentication using JWT  
✅ Secure token generation for authenticated users  
✅ Middleware for token verification  

---

## 📜 Code Snippet  
```javascript
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

const app = express();

app.use(passport.initialize());

// Configure Passport to use Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

// Route to initiate Google OAuth flow
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Callback route that Google will redirect to after authentication
app.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate a JWT for the authenticated user
    const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  }
);

// Middleware to protect routes
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

// Protected Route
app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 🔗 Endpoints  
| Method | Route                  | Description |
|--------|------------------------|-------------|
| GET    | `/`                    | Home Page (Login Link) |
| GET    | `/auth/google`          | Redirect to Google OAuth |
| GET    | `/auth/google/callback` | OAuth Callback & JWT Generation |
| GET    | `/profile`              | Protected Route (Requires JWT) |

---

## 🚀 What's Next?  
🔹 Store user details in **MongoDB** instead of session storage  
🔹 Implement **logout functionality**  
🔹 Improve **UI for authentication pages**  

---

💡 **Reflection:** This session was insightful! **OAuth + JWT** makes authentication **secure and scalable**. Excited to take this further! 🔥  

---
🚀 **Onto the next session!** 🎯

# 📌 Week 20 - Day 4 - Session 2: DSA Journey 🚀

## 🏆 Problem Set: Stack-Based Histogram Challenges

### 📌 1️⃣ Leetcode 84 - **Largest Rectangle in Histogram** 📊
**Goal:** Find the largest rectangle area in a histogram represented by an array of heights.

✅ **Approach:**
- **Monotonic Stack** for finding **Nearest Smaller Element (NSE) Left & Right**.
- Calculate the **width** of each bar using NSE indices.
- Compute the **area** and track the maximum.

📜 **Code Implementation:**
```javascript
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const leftBoundaries = new Array(n);
    const rightBoundaries = new Array(n);
    const leftStack = [], rightStack = [];
    
    // Find Nearest Smaller to Left
    for (let i = 0; i < n; i++) {
        while (leftStack.length > 0 && heights[i] <= heights[leftStack[leftStack.length - 1]]) {
            leftStack.pop();
        }
        leftBoundaries[i] = leftStack.length === 0 ? -1 : leftStack[leftStack.length - 1];
        leftStack.push(i);
    }

    // Find Nearest Smaller to Right
    for (let i = n - 1; i >= 0; i--) {
        while (rightStack.length > 0 && heights[i] <= heights[rightStack[rightStack.length - 1]]) {
            rightStack.pop();
        }
        rightBoundaries[i] = rightStack.length === 0 ? n : rightStack[rightStack.length - 1];
        rightStack.push(i);
    }

    // Compute Max Area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = rightBoundaries[i] - leftBoundaries[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }
    return maxArea;
};
```
📝 **Key Takeaways:**
- **Monotonic Stack** helps find **next smaller elements efficiently**.
- Time Complexity: **O(N)**
- Space Complexity: **O(N)** (Can be optimized to O(1))

---

### 📌 2️⃣ Leetcode 85 - **Maximal Rectangle** 🔳
**Goal:** Given a binary matrix (`0s` and `1s`), find the largest rectangle containing only `1s`.

✅ **Approach:**
- Convert each row into a **histogram representation**.
- Use **Largest Rectangle in Histogram (Leetcode 84)** to compute max area at each row.

📜 **Code Implementation:**
```javascript
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    const rows = matrix.length;
    const cols = matrix[0].length;
    const histogramHeights = new Array(cols).fill(0);
    let maxRectangleArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            histogramHeights[j] = (matrix[i][j] === '1') ? histogramHeights[j] + 1 : 0;
        }
        maxRectangleArea = Math.max(maxRectangleArea, largestRectangleArea(histogramHeights));
    }
    return maxRectangleArea;
};
```
📝 **Key Takeaways:**
- Converts **2D problem into multiple 1D histogram problems**.
- Uses **Leetcode 84’s stack-based approach** for quick computation.
- Time Complexity: **O(rows × cols)**
- Space Complexity: **O(cols)**

---

## 📊 Summary
| 🔢 Problem | ⏳ Time Complexity | 📦 Space Complexity | 🚀 Approach |
|-----------|------------------|------------------|------------|
| **Leetcode 84** | O(N) | O(N) | Monotonic Stack |
| **Leetcode 85** | O(rows × cols) | O(cols) | Histogram + Stack |

🔥 **This session was intense but rewarding!** Mastering stacks and histograms helped in solving **range-based problems efficiently**. 💡

🚀 **Next Steps:** Solve **Skyline Problem**, **Rainwater Trapping**, and explore **Segment Trees** for range-based queries.

📌 **Week 20, Day 4 - Session 2 ✅**

💡 Keep solving, keep learning! 💪😎

