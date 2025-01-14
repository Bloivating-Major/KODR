## Week 10 - Day 1: **Backend Development** 🖧  
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