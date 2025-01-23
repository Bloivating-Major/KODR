
---

# **Lecture 06: EJS, Dynamic Routing, and Initializing a Project**

### **1. Overview**
- In this lecture, we learned how to:
  1. Initialize a project using **npm**.
  2. Set up **Express** as the web framework.
  3. Use **EJS** as the templating engine to render dynamic views.
  4. Set up public static files for styles, images, and JavaScript.
  5. Implement **dynamic routing** to handle flexible and parameterized routes.
  6. Build a simple **Notes Application**.

---

## **2. Steps to Initialize the Project**

1. **Initialize npm:**
   - Run the following command to create a `package.json` file:
     ```bash
     npm init -y
     ```
     The `-y` flag automatically sets default values for the project.

2. **Install Express:**
   - Install Express.js using:
     ```bash
     npm i express
     ```

3. **Set Up Parsers for Form Data:**
   - Add middleware to parse incoming data from the frontend:
     ```javascript
     app.use(express.json()); // For JSON data
     app.use(express.urlencoded({ extended: true })); // For URL-encoded data (e.g., form submissions)
     ```

---

## **3. Setting Up EJS**
1. **Install EJS:**
   - Install the EJS templating engine:
     ```bash
     npm i ejs
     ```

2. **Set EJS as the View Engine:**
   - Configure the app to use EJS:
     ```javascript
     app.set('view engine', 'ejs');
     ```

3. **Create the `views` Directory:**
   - Inside your project folder, create a directory named `views`.

4. **Create an EJS File:**
   - Add an `index.ejs` file in the `views` folder with some content:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Home</title>
         <link rel="stylesheet" href="/stylesheets/style.css">
     </head>
     <body>
         <h1>Welcome to the Notes App</h1>
         <p>This is a simple app to demonstrate EJS and dynamic routing.</p>
     </body>
     </html>
     ```

5. **Render EJS Pages:**
   - Add a route to render the `index.ejs` page:
     ```javascript
     app.get('/', (req, res) => {
         res.render('index'); // Render the EJS page
     });
     ```

---

## **4. Setting Up Public Static Files**
1. **Set Up Static Middleware:**
   - Serve static files (CSS, JavaScript, images) from the `public` directory:
     ```javascript
     const path = require('path');
     app.use(express.static(path.join(__dirname, 'public')));
     ```

2. **Create the `public` Directory:**
   - Inside your project folder, create a directory named `public` with three subdirectories:
     - `images`: Store your image files here.
     - `stylesheets`: Store your CSS files here.
     - `javascripts`: Store your JavaScript files here.

3. **Example File Structure:**
   ```
   ├── views
   │   └── index.ejs
   ├── public
   │   ├── images
   │   │   └── example.jpg
   │   ├── stylesheets
   │   │   └── style.css
   │   └── javascripts
   │       └── script.js
   ```

4. **Linking Static Files in EJS:**
   - Reference static files in your EJS files using their paths:
     ```html
     <link rel="stylesheet" href="/stylesheets/style.css">
     <script src="/javascripts/script.js"></script>
     ```

---

## **5. Dynamic Routing**

### **What is Dynamic Routing?**
- Dynamic routing allows you to create flexible routes with parameters.
- Example:
  - `/profile/sambhav`
  - `/profile/saurabh`
  - `/profile/aditya`
- The dynamic part is the `username` after `/profile`.

### **Steps to Implement Dynamic Routing:**
1. Define a route with a dynamic parameter using a colon (`:`):
   ```javascript
   app.get('/profile/:username', (req, res) => {
       res.send(`Welcome ${req.params.username}`); // Access the dynamic part
   });
   ```

2. Test the Route:
   - Navigate to URLs like:
     - `http://localhost:3000/profile/sambhav`
     - `http://localhost:3000/profile/saurabh`
   - The `username` parameter will change dynamically based on the URL.

---

## **6. Complete Code Example**

Here’s the full code for setting up the project, EJS, public files, and dynamic routing:

```javascript
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

// Dynamic routing example
app.get('/profile/:username', (req, res) => {
    res.send(`Welcome ${req.params.username}`); // Send a response with the dynamic username
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

## **7. Additional Notes**
- **Dynamic Routing Use Case:**
  - Useful for creating personalized user pages (e.g., profiles, dashboards).
- **Static Files:**
  - Essential for adding styles, scripts, and images to your application.
- **EJS Benefits:**
  - Makes it easier to create reusable templates with dynamic content.
- **Project Initialization:**
  - Organizing the project structure early helps with scalability and maintainability.

---
