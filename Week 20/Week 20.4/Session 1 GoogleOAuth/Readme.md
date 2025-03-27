# Google OAuth 2.0 Authentication with Node.js

This document provides step-by-step instructions to integrate Google OAuth 2.0 authentication in a Node.js application using Passport.js.

## Prerequisites

Before proceeding, ensure you have the following:

- **Node.js** installed on your system.
- A **Google account** to create OAuth credentials.
- Basic knowledge of **JavaScript** and **Node.js**.

---

## Step 1: Set Up Google OAuth Credentials

1. **Access Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/).
   - Sign in with your Google account.

2. **Create a New Project**
   - Click the project dropdown and select **New Project**.
   - Provide a name for your project and click **Create**.

3. **Configure OAuth Consent Screen**
   - Go to **APIs & Services** > **OAuth consent screen**.
   - Choose "External" for the user type and click **Create**.
   - Fill in the required details:
     - **App name**
     - **User support email**
     - **Developer contact information**
   - Click **Save and Continue**.

4. **Create OAuth 2.0 Credentials**
   - Navigate to **APIs & Services** > **Credentials**.
   - Click **Create Credentials** and select **OAuth Client ID**.
   - Choose "Web application" as the application type.
   - Set the **Authorized redirect URIs** to:
     ```
     http://localhost:3000/auth/google/callback
     ```
   - Click **Create**.
   - Copy the **Client ID** and **Client Secret**.

---

## Step 2: Initialize the Node.js Project

1. **Create a New Project Directory**
   ```bash
   mkdir google-auth-app
   cd google-auth-app
   ```

2. **Initialize the Project**
   ```bash
   npm init -y
   ```

3. **Install Required Dependencies**
   ```bash
   npm install express passport passport-google-oauth20 jsonwebtoken dotenv
   ```
   - `express` – Web framework for Node.js
   - `passport` – Authentication middleware
   - `passport-google-oauth20` – Google OAuth 2.0 strategy for Passport
   - `jsonwebtoken` – For generating JWTs
   - `dotenv` – For environment variable management

4. **Create a `.env` File**
   - In the root directory, create a file named `.env` and add:
     ```
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     JWT_SECRET=your-jwt-secret
     ```

---

## Step 3: Set Up Express and Google OAuth Strategy

1. **Create the `app.js` File**
   - In your project directory, create a file named `app.js`.

2. **Implement Google OAuth in `app.js`**
   ```javascript
   require('dotenv').config();
   const express = require('express');
   const passport = require('passport');
   const jwt = require('jsonwebtoken');
   const session = require('express-session');
   const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

   const app = express();

   app.use(session({
       secret: 'your-secret-key',
       resave: false,
       saveUninitialized: true,
   }));

   app.use(passport.initialize());
   app.use(passport.session());

   // Configure Passport with Google Strategy
   passport.use(new GoogleStrategy({
       clientID: process.env.GOOGLE_CLIENT_ID,
       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       callbackURL: '/auth/google/callback',
   }, (accessToken, refreshToken, profile, done) => {
       return done(null, profile);
   }));

   passport.serializeUser((user, done) => done(null, user));
   passport.deserializeUser((user, done) => done(null, user));

   // Google Authentication Route
   app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

   // Google OAuth Callback Route
   app.get('/auth/google/callback',
       passport.authenticate('google', { failureRedirect: '/' }),
       (req, res) => {
           // Generate JWT
           const token = jwt.sign({ id: req.user.id, displayName: req.user.displayName }, process.env.JWT_SECRET, { expiresIn: '1h' });
           res.json({ token });
       }
   );

   // Protected Profile Route
   app.get('/profile', (req, res) => {
       if (!req.isAuthenticated()) {
           return res.status(401).send('Unauthorized');
       }
       res.send(`<h1>Profile</h1><pre>${JSON.stringify(req.user, null, 2)}</pre>`);
   });

   app.listen(3000, () => console.log('Server running on port 3000'));
   ```

---

## Step 4: Run the Application

1. **Start the Server**
   ```bash
   node app.js
   ```

2. **Test Authentication Flow**
   - Open your browser and visit:
     ```
     http://localhost:3000/auth/google
     ```
   - Sign in with your Google account.
   - After successful authentication, you’ll receive a JSON Web Token (JWT).

---

## Step 5: Using the JWT for Authentication

After obtaining the JWT, clients can use it for authentication in API requests by including it in the request header:

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" http://localhost:3000/profile
```

---

## Conclusion

This guide covers integrating Google OAuth 2.0 authentication in a Node.js application using Passport.js. With this setup, users can authenticate using their Google accounts, and you can manage sessions and JWT-based authentication for secured API access.

Happy coding! 🚀

