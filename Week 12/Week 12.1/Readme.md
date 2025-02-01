# 🌟 Week 12 - Day 1: DSA Session 1  

Today, we explored the **Sieve of Eratosthenes**, a highly efficient algorithm for finding all prime numbers up to a given number. Here's everything we covered! 🚀  

---

## 🧠 **Key Concept: Sieve of Eratosthenes**  

The **Sieve of Eratosthenes** is an algorithm to find all prime numbers up to a given integer `n`. It's efficient with a time complexity of **O(n log log n)**, making it suitable for large values of `n`.  

---

## 📜 **Code Implementation**  

### 🔢 **Question 1: Generate All Prime Numbers Up to `n`**  

#### **Algorithm Steps**:  
1. Create a boolean array of size `n + 1`, initialized to `true`.  
2. Start from `2` (the first prime number) and iterate up to `sqrt(n)`.  
3. For each number that is still marked `true`, mark all its multiples as `false`.  
4. The numbers that remain `true` are prime numbers.  

#### **Code**:  
```javascript
function Question1() {
    // Sieve of Eratosthenes
    let num = 30; // Find all prime numbers up to 30

    checkPrime(num);

    function checkPrime(num) {
        let arr = new Array(num + 1).fill(true); // Create a boolean array
        arr[0] = arr[1] = false; // 0 and 1 are not prime numbers

        // Mark multiples of each number starting from 2
        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (arr[i] === true) {
                for (let j = i * i; j <= num; j += i) {
                    arr[j] = false; // Mark multiples as non-prime
                }
            }
        }

        // Print all prime numbers
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] === true) {
                console.log(i + " ");
            }
        }
    }
}

Question1();
```

---

## 📊 **Example Walkthrough**  

### **Input**: `num = 30`  
### **Process**:  
1. **Initialization**: Create an array `arr` of size `31` (0 to 30), all initialized to `true`.  
2. **Mark Non-Primes**:  
   - Start with `i = 2`. Mark multiples of `2` as `false` (`4, 6, 8, ...`).  
   - Move to `i = 3`. Mark multiples of `3` as `false` (`9, 12, 15, ...`).  
   - Skip `i = 4` (already marked `false`).  
   - Continue until `i = sqrt(30)`.  
3. **Output Primes**: The indices where `arr[i]` is still `true` are prime numbers.  

### **Output**:  
Prime numbers up to 30:  
`2, 3, 5, 7, 11, 13, 17, 19, 23, 29`.  

---

## ✨ **Key Takeaways**  

1. **Efficiency**:  
   - Instead of checking each number individually, we eliminate non-prime numbers in bulk.  
   - Time complexity: **O(n log log n)**.  

2. **Space Optimization**:  
   - We use a simple array to keep track of prime and non-prime numbers.  

3. **Real-Life Applications**:  
   - Cryptography: Prime numbers are crucial for encryption algorithms like RSA.  
   - Number theory problems in competitive programming.  

---

## 🔍 **Why Is This Algorithm Important?**  

- **Simplifies Prime Checking**: Quickly identifies all prime numbers in a range.  
- **Foundation for Advanced Concepts**: Used in algorithms that require prime numbers, such as factorization and modular arithmetic.  

---

## 🧩 **What's Next?**  

In upcoming sessions, we’ll expand on this by exploring:  
- Prime factorization.  
- GCD and LCM using prime numbers.  
- Modular arithmetic and its applications.  

Keep learning and stay curious! 🚀  
# 🌟 Week 12 - Day 1: Backend Session 1  

In today's session, we took the first steps toward creating a **MongoDB database cluster** on **MongoDB Atlas**, a cloud-based solution for managing your databases. Below are the detailed notes with step-by-step instructions! 🛠️  

---

## 🗄️ **What is a Database Cluster?**  
A **cluster** is a collection of servers or nodes that store data and ensure high availability and scalability.  
MongoDB Atlas lets us create these clusters in the cloud, ensuring:  
- Secure storage.  
- Easy scaling as your application grows.  
- Accessibility from anywhere.  

---

## 🚀 **Steps to Create a Database Cluster**  

### 🟢 **1. Access MongoDB Atlas**  
1. Go to the official MongoDB Atlas website: [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas).  
2. Log in or create an account if you don’t already have one.  

---

### 🟢 **2. Create a New Project**  
1. Click on **Projects** in the navigation bar.  
2. Click on **New Project** and give it a name (e.g., "My Backend Project").  
3. Select the appropriate organization (if applicable) and click **Create Project**.  

---

### 🟢 **3. Create a New Cluster**  
1. Inside the project, click on **Build a Cluster**.  
2. Choose the type of cluster:  
   - **Shared Cluster** (Free Tier): Good for small apps and learning.  
   - **Dedicated Cluster**: For production-level apps (paid).  
3. Select a **Cloud Provider** (AWS, Google Cloud, or Azure).  

---

### 🟢 **4. Choose the Cluster Region**  
1. Pick a **region** that is **nearest** to your target audience.  
2. MongoDB Atlas will show regions where the free-tier cluster is available.  

---

### 🟢 **5. Create Your Cluster**  
1. Review your cluster configuration and click on **Create Cluster**.  
2. Wait for a few minutes while MongoDB sets up your cluster.  

---

## 🛠️ **What’s Next After Setting Up the Cluster?**  

1. **Connect Your Application:**  
   - MongoDB Atlas provides a connection string for connecting your database to an application.  

2. **Database Security:**  
   - Set up **authentication** (username and password).  
   - Whitelist your IP address for access.  

3. **Test Database Connection:**  
   - Use tools like **MongoDB Compass** or **Mongoose** in Node.js to connect and verify.  

---

## 🌟 **Why Use MongoDB Atlas?**  

1. **Scalability:** Easily scale your database as your app grows.  
2. **Accessibility:** Manage your database from anywhere via the cloud.  
3. **High Availability:** Built-in features to ensure minimal downtime.  
4. **Free Tier:** Great for learning and small projects.  

---

## ✅ **Key Takeaways**  

- MongoDB Atlas is a powerful platform for managing your databases in the cloud.  
- A **cluster** ensures high availability and efficient management of data.  
- The **free tier** is perfect for learners and small-scale apps.  

Stay tuned for the next session, where we'll connect our cluster to a **backend application** and start working with data! 🌐📦  