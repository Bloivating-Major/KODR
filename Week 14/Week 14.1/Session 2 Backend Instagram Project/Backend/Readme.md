In Mongoose (a MongoDB ODM for Node.js), `statics` and `methods` are two ways to add custom functionalities to your Mongoose schema. They allow you to define reusable logic that interacts with the database in an organized manner.  

---

## 1. `userSchema.statics` (Static Methods)
Static methods are methods that are defined on the **Model itself** rather than on an instance of the document. They are useful when you want to perform operations that involve multiple documents, such as querying the database or performing bulk updates.

### 🔹 How to Define Static Methods
Static methods are defined using `schema.statics.methodName = function (...) {}`.

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Defining a static method
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email }); // 'this' refers to the User model
};

// Creating the model
const User = mongoose.model('User', userSchema);

// Using the static method
async function test() {
    const user = await User.findByEmail('test@example.com');
    console.log(user);
}

test();
```
### 🔹 Key Points:
✅ Defined on the model, so they are called directly on the model (e.g., `User.findByEmail(...)`).  
✅ Used for operations that involve multiple documents.  
✅ Best suited for queries, aggregations, or batch operations.

---

## 2. `userSchema.methods` (Instance Methods)
Instance methods are methods that are available on **individual document instances**. They are useful for operations that need to be performed on a single document, such as checking passwords, formatting data, or manipulating fields.

### 🔹 How to Define Instance Methods
Instance methods are defined using `schema.methods.methodName = function (...) {}`.

```javascript
const bcrypt = require('bcrypt');

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

async function test() {
    const user = await User.findOne({ email: 'test@example.com' });
    if (user) {
        const isMatch = await user.comparePassword('password123');
        console.log(isMatch ? 'Password Correct' : 'Password Incorrect');
    }
}

test();
```

### 🔹 Key Points:
✅ Defined on an instance of a document, so they are called on a specific user (e.g., `user.comparePassword(...)`).  
✅ Used for operations on **individual** documents (e.g., password validation, modifying fields, etc.).  
✅ The `this` keyword inside an instance method refers to the document itself.

---

## 🔥 Difference Between `statics` and `methods`
| Feature        | `statics` (Static Methods) | `methods` (Instance Methods) |
|---------------|--------------------------|-----------------------------|
| Scope         | Defined on the **model** | Defined on **document instances** |
| Access        | `User.findByEmail(email)` | `user.comparePassword(password)` |
| Use Case      | Querying database, bulk operations | Manipulating a single document |
| `this` refers to | The entire model | The document (instance) |

---

### 📌 Example Use Case for Authentication
1. **Static Method (`statics`)**: Find a user by email  
2. **Instance Method (`methods`)**: Compare password with hashed password

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Static method to find user by email
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
};

// Instance method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

async function loginUser(email, password) {
    const user = await User.findByEmail(email);
    if (!user) {
        console.log('User not found');
        return;
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch) {
        console.log('Login Successful');
    } else {
        console.log('Invalid Credentials');
    }
}

// Example login test
loginUser('test@example.com', 'password123');
```

---

### ✅ When to Use `statics` vs. `methods`?
- Use **statics** when you need to perform an operation on the **entire collection** (e.g., find a user, get all users, aggregate data).
- Use **methods** when you need to perform an operation on a **single document** (e.g., validate password, update profile, check permissions).

