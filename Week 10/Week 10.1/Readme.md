## Week 10 - Day 1: **Backend Development and DSA and JS Sets** 🖧  
### **Session 1: Building Backend Basics**  

---

### 🎯 **Topics Covered Today**  

---

### 1️⃣ **Express Server Setup**  
#### 🚀 Steps to Initialize and Run a Basic Express Server:
- **Initialized Node App:**  
  - Created a `package.json` file using `npm init`.  
- **Created `app.js` File:**  
  - Added server code to `app.js`.  
- **Installed Express Library:**  
  ```bash
  npm install express
  ```  
- **Required Express:**  
  ```javascript
  const express = require("express");
  ```  
- **Set up Routes with `app.get`:**  
  - Created a basic GET route.  
  - Added a wildcard route for unavailable paths.  
- **Started the Server with `app.listen`:**  
  ```javascript
  app.listen(3000, () => {
    console.log("Server is Running on port 3000");
  });
  ```  

#### 🔧 **Code Example:**  
```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.send("This route is not available");
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
```

---

### 2️⃣ **Setting Up a View Engine (EJS)**  

#### 📖 **Key Concepts:**
- **View Engine:**  
  - Integrated EJS (Embedded JavaScript) for dynamic HTML rendering.  
- **`app.set`:**  
  - Configured the application to use `ejs` as the view engine.  
- **`res.render`:**  
  - Used to render EJS templates with data passed from the backend.  
- **Wildcards:**  
  - Created a fallback route to handle undefined paths using `*`.  
- **Passing Data to Views:**  
  - Sent strings, numbers, and arrays of objects to EJS templates.

#### 🔧 **Code Example:**  
```javascript
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const name = "Sambhav";

  const data = [
    {
      name: "Sambhav",
      age: 20,
    },
    {
      name: "Kunal",
      age: 22,
    },
    {
      name: "Soham",
      age: 19,
    },
  ];

  res.render("index", { users: data, name: name });
});

app.get("*", (req, res) => {
  res.render("notFound");
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
```

#### 🎨 **EJS File Examples:**
- **`index.ejs`:**  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Welcome</title>
  </head>
  <body>
    <h1>Hello, <%= name %>!</h1>
    <ul>
      <% users.forEach(user => { %>
        <li><%= user.name %> - Age: <%= user.age %></li>
      <% }) %>
    </ul>
  </body>
  </html>
  ```

- **`notFound.ejs`:**  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Not Found</title>
  </head>
  <body>
    <h1>Oops! The page you're looking for doesn't exist.</h1>
  </body>
  </html>
  ```

---

### 3️⃣ **Public Folder Setup**  
#### 📂 **Static Assets:**
- **`app.use(express.static)`:**  
  - Configured the app to serve static files like CSS and images.  
- **Created a Public Folder:**  
  - Included CSS files and images in the `public` folder.  
- **Linked Static Files in EJS Templates:**  
  - Used `<link>` for CSS and `<img>` for images.

#### 🔧 **Code Example:**  
```javascript
const express = require("express");
const app = express();

// Serve static files
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
```

#### 📂 **Folder Structure:**
```
project/
│
├── public/
│   ├── styles.css
│   └── logo.png
├── views/
│   ├── index.ejs
│   └── notFound.ejs
├── app.js
└── package.json
```

#### 🎨 **CSS Example (`styles.css`):**
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

h1 {
  color: #007bff;
}
```

---

### 🌟 **Key Takeaways**  
- Set up a simple Express server with routing.  
- Rendered dynamic content using EJS templates.  
- Integrated a `public` folder to serve static files.  

🚀 **Next Steps:**  
Start exploring **middleware**, **API routes**, and **database connections** in backend development.  

# 📚 Week 10 - Day 1: **DSA & JavaScript Sets**  

---

## 🚀 **Session 2: LeetCode Practice + Mastering JS Sets**

Today, we dived into solving **LeetCode questions** 🧩 and explored the power of **Sets in JavaScript** for handling unique data and efficient lookups. Here's the breakdown:

---

## ✨ **Key Concepts Studied**
- **JavaScript Sets**  
  - A **Set** is a collection of unique values (no duplicates allowed).  
  - Operations like `add`, `delete`, and `has` make Sets incredibly efficient for certain problems.  

---

### 🛠️ **JavaScript Set Basics**

#### Example: Removing Duplicate Elements  
```javascript
let arr = [10, 12, 10, 12, 4, 1, 2, 4, 2];
let set = new Set();

for (let i = 0; i < arr.length; i++) {
  if (set.has(arr[i])) set.delete(arr[i]);
  else set.add(arr[i]);
}
console.log(set); // Output: Set { 1 }
```
**Explanation:**  
- This code identifies the element(s) that occur only once by adding/removing elements from the Set.

---

## 🧩 **LeetCode Questions Solved**

### **1️⃣ LeetCode 1832: Check if the Sentence is a Pangram**  
🔍 **Problem:**  
A sentence is a **pangram** if it contains every letter of the English alphabet at least once. Write a function to check if a given sentence is a pangram.

#### **Solution:**  
```javascript
function Question1() {
  let sentence = "leetcode"; // Example Input
  let set = new Set();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] >= "a" && sentence[i] <= "z") {
      set.add(sentence[i]);
    }
  }

  if (set.size == 26) console.log("Panagram");
  else console.log("Not Panagram");
}

// Question1();
```

#### ✅ **Key Steps:**  
1. **Initialize a Set:** To store unique letters.  
2. **Iterate Through the Sentence:** Add letters to the Set if they fall within the range of `'a'` to `'z'`.  
3. **Check the Set Size:** If the size is 26, the sentence is a pangram.  

---

### **2️⃣ LeetCode 771: Jewels and Stones**  
🔍 **Problem:**  
You're given two strings:  
- `jewels` (types of stones that are jewels).  
- `stones` (stones you have).  
Find out how many of the stones you have are also jewels.

#### **Solution:**  
```javascript
function Question2() {
  let jewels = "aA"; // Example Input
  let stones = "aAAbbbb"; // Example Input
  let count = 0;
  let set = new Set(jewels);

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }
  console.log(count); // Output: 3
}

Question2();
```

#### ✅ **Key Steps:**  
1. **Initialize a Set:** Store all jewel types in the Set for fast lookup.  
2. **Iterate Through Stones:** Increment the count for every stone that exists in the Set.  

---

## 🔑 **Takeaways from Today**
1. **JS Sets are Powerful!**  
   - Efficiently handle **unique elements**.  
   - Use methods like `add`, `delete`, and `has` for seamless operations.  

2. **LeetCode Mastery:**  
   - Solved **real-world problems** by combining logic with Set operations.  
   - Strengthened understanding of efficient lookups.  

---

## 💡 **What’s Next?**
- More hands-on practice with **data structures** like Maps, Arrays, and Objects.  
- Continue solving **LeetCode problems** to strengthen logic-building skills.  

---

🎉 **Great Progress Today!** Keep coding, keep growing 🚀  