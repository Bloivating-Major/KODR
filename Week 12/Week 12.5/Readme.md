# **📝 Pseudocode for User Authentication System (Week 12 - Day 5: Backend Session 1)**
🚀 This pseudocode will help you understand the step-by-step process for implementing **User Authentication** using **Node.js, Express, MongoDB, bcrypt, and JWT**.

---

## **📌 Step 1: Initialize the Project**
```
START
1. Initialize the project
   - Run 'npm init -y' to create a package.json file.
   - Install required dependencies: express, mongoose, dotenv, bcrypt, jsonwebtoken.

2. Create the following folders:
   - src/
   - src/routes/
   - src/controllers/
   - src/models/
   - src/db/

3. Create the following files:
   - server.js (entry point)
   - src/app.js (Express configuration)
   - src/db/db.js (Database connection)
   - src/models/user.model.js (User Schema)
   - src/routes/userRoutes.js (User Routes)
   - src/controllers/user.controller.js (User Controllers)
   - .env (Environment variables)
```

---

## **📌 Step 2: Set Up the Server**
```
1. In 'server.js':
   - Import dotenv and configure environment variables.
   - Import 'db.js' to connect MongoDB.
   - Import and start Express app from 'app.js'.
   - Listen on PORT 3000.

2. In '.env' file:
   - Define PORT, MONGO_URL, and JWT_SECRET.
```

---

## **📌 Step 3: Configure Express in `app.js`**
```
1. Import Express.
2. Create an Express application.
3. Enable JSON parsing and URL encoding.
4. Define routes:
   - '/' → indexRoutes
   - '/user' → userRoutes
5. Export the app.
```

---

## **📌 Step 4: Set Up Routes**
```
1. In 'indexRoutes.js':
   - Create '/' route to display "Welcome to Home Page".

2. In 'userRoutes.js':
   - Create routes:
     - GET '/register' → Render registration page.
     - POST '/register' → Register a new user.
     - GET '/login' → Render login page.
     - POST '/login' → Authenticate user and generate token.
     - GET '/profile' → Fetch user profile (protected route).
```

---

## **📌 Step 5: Connect to MongoDB**
```
1. In 'db/db.js':
   - Import mongoose.
   - Connect to MongoDB using 'mongoose.connect(process.env.MONGO_URL)'.
   - Handle connection success or failure.
```

---

## **📌 Step 6: Create the User Model**
```
1. In 'user.model.js':
   - Define User Schema:
     - username (String, required, minlength: 6)
     - email (String, required, minlength: 6)
     - password (String, required, minlength: 6)
   - Export User model.
```

---

## **📌 Step 7: Implement User Controllers**
```
1. Import dependencies (User Model, bcrypt, jwt).

2. Register a new user:
   - Get user data from request body.
   - Hash password using bcrypt.
   - Save user to database.
   - Send success response.

3. Login user:
   - Retrieve user from database using email.
   - Compare passwords using bcrypt.
   - Generate JWT token if credentials are valid.
   - Send token as response.

4. Fetch user profile (Protected Route):
   - Extract token from request headers.
   - Verify JWT token.
   - Retrieve user details from database.
   - Send user profile data as response.
```

---

## **📌 Step 8: Testing with Postman**
```
1. Test user registration by sending POST request to '/register'.
2. Test login by sending POST request to '/login'.
   - Extract JWT token from response.
3. Use the JWT token to access the '/profile' route.
   - Send GET request with token in Authorization header.
4. Handle errors:
   - If token is missing, return "Token Not Found".
   - If password is incorrect, return "Invalid Credentials".
   - If user is not found, return "User Not Found".
```

---

## **🎯 Key Takeaways**
✅ Setting up **Express Server**  
✅ Connecting **MongoDB with Mongoose**  
✅ Implementing **User Authentication (Register & Login)**  
✅ Encrypting passwords with **bcrypt**  
✅ Securing API routes using **JWT (Token-Based Authentication)**  

---

🎉 **Great Work! Keep Practicing!** 🚀🔥