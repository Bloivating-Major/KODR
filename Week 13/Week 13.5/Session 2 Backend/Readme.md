## 🚀 Week 13 - Day 5: **Backend - Extra Security Layer via Config File 🔒**  

### **📌 What We Learned Today**
Today, we implemented an **additional security layer** in our backend by using a **config file** to store essential environment variables securely.  

✅ **Centralized Configuration Management 📂**  
✅ **Prevention of Hardcoded Secrets 🔑**  
✅ **Improved Code Maintainability & Security 🚀**  

---

## **🛠️ Why Use a Config File?**
🔹 **Security**: Prevents hardcoding sensitive information like database URLs or API keys.  
🔹 **Flexibility**: Easily update configurations without modifying multiple files.  
🔹 **Environment-Specific Settings**: Allows different configurations for development, testing, and production.  

---

## **📌 Implementing the Config File**
We created a **config file** to manage environment variables **securely** and **efficiently**.

### **📂 File: `config.js`**
```javascript
const _config = {
    PORT: process.env.PORT || 3000,  // 🌍 Fallback to 3000 if PORT is not set
    MONGO_URL: process.env.MONGO_URL || "mongodb://localhost:27017/extraSecure",  // 🛡️ Secure DB Connection
};

// 🔒 Freezing the object to prevent modifications
const config = Object.freeze(_config);

module.exports = config;
```

---

## **📌 How It Works?**
1️⃣ **Reads environment variables (`.env` file)** using `process.env`.  
2️⃣ **Provides fallback values** if environment variables are missing.  
3️⃣ **Freezes the configuration object** using `Object.freeze()` to prevent accidental modifications.  
4️⃣ **Exports the config object** so it can be used across the project.  

---

## **📌 How to Use the Config File?**
Simply import the config file in **`server.js`** or any other file:

```javascript
const config = require("./config"); 

console.log("Server running on port:", config.PORT);
console.log("Connected to Database:", config.MONGO_URL);
```

---

## **🚀 Key Takeaways**
✅ **Better security** by avoiding hardcoded credentials.  
✅ **Easier environment management** for different setups (development, staging, production).  
✅ **Prevents accidental modifications** by freezing the config object.  

---

## **🔜 Next Steps**
🔹 Implement **dotenv** (`npm i dotenv`) for better **environment management**.  
🔹 Add **CORS protection & Helmet.js** for additional **security layers**.  
🔹 Secure **JWT Authentication Tokens** using **config-based secrets**.  

🔹 **Happy Coding! 🚀**