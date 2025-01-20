
---

# Lecture 04: Express.js, Routing & Middleware

## **1. Express.js Framework**  
### **Introduction to Express.js**  
- **What is Express.js?**
  - Express.js is a **minimal and flexible web application framework** for Node.js.
  - It simplifies the process of building web applications and APIs.
  - Express provides robust features like routing, middleware, and error handling.

- **What is a Framework?**
  - A framework is a structured flow for application development.
  - It provides predefined tools and libraries to simplify coding and ensure consistency.
  - Express.js manages the entire process:
    - Receiving the **request** from the client.
    - Processing the request.
    - Sending the appropriate **response** back to the client.

---

## **2. Setting up a Basic Express Application**
Here’s how you can build your first Express.js application:

### **Step-by-Step Code Example**  
```javascript
const express = require('express'); // Import the Express package
const app = express(); // Create an Express application instance

// Creating a basic GET route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to Express.js'); // Sending a response to the client
});

// Setting up a server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### **Challenges with Server Restarts**  
- By default, you need to manually restart the server to reflect code changes.  
- To solve this, you can use **Nodemon**, a tool that automatically restarts your server when changes are detected.  
- **Install Nodemon globally:**  
  ```bash
  npm i nodemon -g
  ```  
- Run your app with Nodemon:  
  ```bash
  nodemon app.js
  ```

---

## **3. Routing in Express.js**  
- **What is a Route?**  
  A **route** defines how an application responds to a client request for a specific URL.  
  Example:  
  - `/` → Home route.  
  - `/profile` → Profile route.

### **Code Example for Multiple Routes**  
```javascript
const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Hello! You are on the Home Page.');
});

// Profile route
app.get('/profile', (req, res) => {
    res.send('Welcome to your Profile Page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

## **4. Middleware in Express.js**  
### **What is Middleware?**  
Middleware functions are operations that execute **between** receiving a request and sending a response.  
- Example:
  - Logging the request details.
  - Authenticating the user.
  - Modifying the request or response.

### **Middleware Flow**  
```text
Request → Middleware → Routes → Response
```

### **Code Example of Middleware**  
```javascript
// Example middleware that logs the request method and URL
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

// Example route
app.get('/', (req, res) => {
    res.send('Middleware executed before this route!');
});
```

---

## **5. Request and Response Handling**  
- **Request (req):** Represents the HTTP request from the client. Contains details like headers, body, query parameters, etc.  
- **Response (res):** Represents the HTTP response sent back to the client.  
- **Example Code:**
```javascript
app.get('/user', (req, res) => {
    // Sending a JSON response
    res.json({
        name: 'Sambhav',
        age: 25,
        profession: 'Developer'
    });
});
```

---

## **6. Error Handling in Express.js**  
### **What is Error Handling?**  
Error handling in Express ensures that any unexpected issues during request processing are managed gracefully.  

### **Code Example for Error Handling**  
```javascript
// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something went wrong!'); // Send a generic error message
});
```

### **When to Use Error Handlers?**  
- Catching invalid inputs.
- Handling server-side issues (e.g., database errors).
- Providing user-friendly error messages.

---

## **7. Advanced Middleware Concepts**  
### **Third-Party Middleware**  
- Express supports third-party middleware like `body-parser` and `morgan`.  
- **Example:**
  ```bash
  npm i morgan
  ```
  ```javascript
  const morgan = require('morgan');
  app.use(morgan('dev')); // Logs all requests to the console
  ```

### **Built-In Middleware**  
- `express.json()` → Parses JSON requests.  
- `express.urlencoded()` → Parses URL-encoded data.

---

## **8. Combining Everything: Example App**  
Here’s a complete example that demonstrates routing, middleware, and error handling:

```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(morgan('dev')); // Logs request details
app.use(express.json()); // Parses JSON body

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.post('/data', (req, res) => {
    const data = req.body; // Accessing JSON data from the request
    res.send(`Received Data: ${JSON.stringify(data)}`);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Server Error!');
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---
