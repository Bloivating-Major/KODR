# **Week 6 - Day 2: Conditional Rendering in React**  

Today, we explored **Conditional Rendering in React**, a crucial concept that allows us to display different UI elements based on specific conditions. Here's a summary of the exercise, where we practiced various ways to implement conditional rendering.  

---

## **What We Built**

We created three components to understand and implement conditional rendering using:  
1. **if, else if, else** statements.  
2. **Logical AND (`&&`)** operator.  
3. **Ternary (`? :`)** operator.  

---

## **Step-by-Step Guide**

### **1. Weather Component**  

This component renders different messages based on the `temperature` prop using **if, else if, else statements**.  

#### **Code:**  
```jsx
import React from "react";

const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <p>It's cold outside!</p>;
  } else if (temperature <= 25) {
    return <p>It's nice outside!</p>;
  } else {
    return <p>It's hot outside!</p>;
  }
};

export default Weather;
```

---

### **2. UserStatus Component**  

This component displays messages for different user statuses (Admin or User) using the **logical AND (`&&`)** operator.  

#### **Code:**  
```jsx
import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && isAdmin && <p>Welcome Admin!</p>}
      {loggedIn && !isAdmin && <p>Welcome User!</p>}
      {!loggedIn && <p>Please log in!</p>}
    </div>
  );
};

export default UserStatus;
```

---

### **3. Greeting Component**  

This component displays greetings based on the `timeOfDay` prop using the **ternary (`? :`)** operator.  

#### **Code:**  
```jsx
import React from "react";

const Greeting = ({ timeOfDay }) => {
  return (
    <p>
      {timeOfDay === "morning"
        ? "Good morning!"
        : timeOfDay === "afternoon"
        ? "Good afternoon!"
        : "Good evening!"}
    </p>
  );
};

export default Greeting;
```

---

### **4. Integrating All Components in App.jsx**  

We rendered all the components in the `App.jsx` file and passed various props to test the conditional rendering logic.  

#### **Code:**  
```jsx
import React from "react";
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Weather Component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus Component */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} />

      {/* Greeting Component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting timeOfDay="evening" />
    </div>
  );
}

export default App;
```

---

## **Key Learnings**  

### **1. Using `if, else if, else` Statements**  
- **Purpose**: Suitable for handling multiple conditions.  
- **Example**:  
  ```jsx
  if (condition1) {
    // Render something
  } else if (condition2) {
    // Render something else
  } else {
    // Render default
  }
  ```

### **2. Using the Logical AND (`&&`) Operator**  
- **Purpose**: Conditionally render elements only when the condition is true.  
- **Example**:  
  ```jsx
  {loggedIn && <p>Welcome back!</p>}
  ```

### **3. Using the Ternary (`? :`) Operator**  
- **Purpose**: Concise way to handle simple conditions.  
- **Example**:  
  ```jsx
  {isLoggedIn ? <p>Welcome User</p> : <p>Please Log In</p>}
  ```

---

## **Output Examples**

### **Weather Component**  
- For `temperature = 10`:  
  Output: *"It's cold outside!"*  
- For `temperature = 20`:  
  Output: *"It's nice outside!"*  
- For `temperature = 30`:  
  Output: *"It's hot outside!"*  

### **UserStatus Component**  
- For `loggedIn = true` and `isAdmin = true`:  
  Output: *"Welcome Admin!"*  
- For `loggedIn = true` and `isAdmin = false`:  
  Output: *"Welcome User!"*  
- For `loggedIn = false`:  
  Output: *"Please log in!"*  

### **Greeting Component**  
- For `timeOfDay = "morning"`:  
  Output: *"Good morning!"*  
- For `timeOfDay = "afternoon"`:  
  Output: *"Good afternoon!"*  
- For `timeOfDay = "evening"`:  
  Output: *"Good evening!"*  

---

## **Takeaways**  
- Conditional rendering is a core concept in React that makes components dynamic and interactive.  
- React provides flexible ways to implement conditional rendering, including `if-else`, `&&`, and the ternary operator.  
- Proper use of conditional rendering improves code readability and functionality.  

---

Happy Coding! 🚀  