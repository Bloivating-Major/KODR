# 📸 **Week 14: Building an Instagram Clone - Full Stack Application** 🚀  

This week was all about creating a **full-stack Instagram clone** using **React (Frontend) + Express & MongoDB (Backend)**. We implemented **user authentication**, **profile management**, and a **feed system**. Let's break it down!  

---

## 🔥 **Tech Stack Used**
✅ **Frontend:** React, Vite, Tailwind CSS, React Router DOM  
✅ **Backend:** Express.js, MongoDB, Mongoose, JWT, Bcrypt  
✅ **API Calls:** Axios  

---

## 🏗️ **Project Breakdown**

### 1️⃣ **Backend Setup - Express + MongoDB**
📌 **Steps Followed:**  
- Initialized project → `npm init -y`  
- Installed dependencies → `npm i express mongoose bcrypt jsonwebtoken cors dotenv`  
- Set up Express server  
- Connected to **MongoDB Atlas**  
- Created routes: `/register`, `/login`, `/profile`, `/feed`  

📌 **Authentication Implemented:**  
- **JWT-Based Auth**  
- **Password Hashing** with Bcrypt  
- **Protected Routes** (Only logged-in users can access the feed)  

📌 **API Endpoints:**  
```javascript
// Register API
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ username, email, password: hashedPassword });
  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
  res.json({ token, message: "User Registered Successfully" });
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ message: "Invalid Credentials" });
  
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token, message: "Login Successful" });
});
```
---

### 2️⃣ **Frontend Setup - React + Vite + Tailwind CSS**
📌 **Steps Followed:**  
- Created a new React app → `npm create vite@latest instagram-clone --template react`  
- Installed dependencies → `npm i react-router-dom axios`  
- Set up **React Router for navigation**  

📌 **Components Built:**  
- **Register Page**  
- **Login Page**  
- **Profile Page**  
- **Feed Page**  
- **Protected Routes with JWT Auth**  

📌 **Register Page - API Integration with Axios**
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post("http://localhost:5000/register", { username, email, password })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    })
    .catch(err => setError(err.response.data?.message));
};
```

📌 **Profile Page Structure:**  
```jsx
<main>
  <section>
    {/* Profile Header */}
    <div className="profile-header">
      <h1>{username}</h1>
    </div>

    {/* Posts Grid */}
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt="Post" />
        </div>
      ))}
    </div>
  </section>
</main>
```

---

## 🚀 **Final Features Implemented**
✅ **User Authentication (Register & Login with JWT)**  
✅ **Protected Routes (Profile & Feed)**  
✅ **User Profile with Posts**  
✅ **React Router for Navigation**  
✅ **Tailwind CSS for Styling**  

---

## 🎯 **Next Steps**
🔹 Implement **post creation** (allow users to upload images)  
🔹 Add **like & comment** features  
🔹 Enhance UI with **animations & transitions**  

🔥 **Excited to continue building!** 🚀