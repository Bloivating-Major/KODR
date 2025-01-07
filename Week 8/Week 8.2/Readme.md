# **Week 8 - Day 2: Understanding Context API in React**

Today, we learned how to use the **Context API** in React to manage and share state across multiple components without prop drilling. Here's a detailed overview of what we accomplished:

---

## **What is Context API?**
The Context API allows you to:
1. Share state between components without passing props down manually at every level.
2. Create a global state that can be accessed by any component in the component tree.

---

## **Topics Covered**

### **1. Setting Up Context**
We created a `UserContext` to manage a global `user` state. The context provider is responsible for wrapping the application and providing state and functions to update it.

### **2. Accessing Context**
Using the `useContext` hook, we accessed and updated the shared `user` state in two separate components:
- `UserProfile`: To display the current user information.
- `UpdateUser`: To update the user's name via a form.

---

## **Code Overview**

### **1. User Context Setup**
File: `UserContext.jsx`  
The `UserContext` and `UserProvider` are created to hold and manage the global `user` state.

```javascript
import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
```

---

### **2. User Profile Component**
File: `UserProfile.jsx`  
This component retrieves the `user` state from the context and displays it.

```javascript
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <h1>Name: {user.name}</h1>
    </div>
  );
};

export default UserProfile;
```

---

### **3. Update User Component**
File: `UpdateUser.jsx`  
This component allows the user to update their name using the `updateUser` function from the context.

```javascript
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
```

---

### **4. App Component**
File: `App.jsx`  
The `UserProvider` wraps the `UserProfile` and `UpdateUser` components to provide access to the shared context.

```javascript
import React from "react";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
```

---

## **How It Works**

1. **User Context Provider**:  
   The `UserProvider` holds the state and logic to update the `user` object. It uses the `createContext` and `useState` hooks.

2. **Accessing State with `useContext`**:  
   - In `UserProfile`, we accessed the `user` state to display the current name.
   - In `UpdateUser`, we accessed the `updateUser` function to change the name dynamically.

3. **Wrapping with Provider**:  
   The `UserProvider` is wrapped around the `UserProfile` and `UpdateUser` components in `App.jsx`, making the state available to both components.

---

## **Output**

### Initial Render:
- The `UserProfile` component displays:  
  ```
  Name: John Doe
  ```

### After Update:
- When a new name is entered in the `UpdateUser` form and submitted, the `UserProfile` component updates dynamically to show the new name.

---

## **Takeaways**

1. **Centralized State Management**: The Context API simplifies state sharing across components without the hassle of prop drilling.
2. **Ease of Access with `useContext`**: The `useContext` hook makes it straightforward to retrieve and update context values.
3. **Reusability**: By separating logic into individual components, the application becomes modular and maintainable.

---

Happy Coding! 🚀