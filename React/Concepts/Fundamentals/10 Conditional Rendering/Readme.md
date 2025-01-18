# 🌦️ **Session 10 : Conditional Rendering in React**

Conditional rendering is an essential concept in React that allows components to render different outputs based on dynamic conditions. This exercise helps you practice various ways to implement conditional rendering in React.

---

## 🔧 **Steps to Follow**

### 1️⃣ **Create a `Weather` Component Using `if`, `else if`, and `else`**

📁 **File Name:** `Weather.jsx`

👨‍💻 **Instructions:**
1. Create a functional component called `Weather`.
2. The component should:
   - Accept a `temperature` prop.
   - Use `if`, `else if`, and `else` statements to display messages based on the temperature:
     - 🌬️ **Below 15:** "It's cold outside!"
     - 🌤️ **15 - 25:** "It's nice outside!"
     - ☀️ **Above 25:** "It's hot outside!"

```jsx
function Weather({ temperature }) {
  if (temperature < 15) {
    return <p>🌬️ It's cold outside!</p>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <p>🌤️ It's nice outside!</p>;
  } else {
    return <p>☀️ It's hot outside!</p>;
  }
}

export default Weather;
```

---

### 2️⃣ **Create a `UserStatus` Component Using the `&&` Operator**

📁 **File Name:** `UserStatus.jsx`

👨‍💻 **Instructions:**
1. Create a functional component called `UserStatus`.
2. The component should:
   - Accept two boolean props: `loggedIn` and `isAdmin`.
   - Use the `&&` operator to display:
     - 👑 **"Welcome Admin!"** if `loggedIn` and `isAdmin` are both `true`.
     - 👤 **"Welcome User"** if `loggedIn` is `true` but `isAdmin` is `false`.

```jsx
function UserStatus({ loggedIn, isAdmin }) {
  return (
    <div>
      {loggedIn && isAdmin && <p>👑 Welcome Admin!</p>}
      {loggedIn && !isAdmin && <p>👤 Welcome User</p>}
    </div>
  );
}

export default UserStatus;
```

---

### 3️⃣ **Create a `Greeting` Component Using a Ternary Operator**

📁 **File Name:** `Greeting.jsx`

👨‍💻 **Instructions:**
1. Create a functional component called `Greeting`.
2. The component should:
   - Accept a `timeOfDay` prop (e.g., `"morning"`, `"afternoon"`, or `"evening"`).
   - Use a ternary operator to display:
     - 🌅 **"Good morning!"** if `timeOfDay` is `"morning"`.
     - 🌇 **"Good afternoon!"** if `timeOfDay` is `"afternoon"`.
     - 🌙 **"Good evening!"** if `timeOfDay` is `"evening"` or undefined.

```jsx
function Greeting({ timeOfDay }) {
  return (
    <p>
      {timeOfDay === "morning"
        ? "🌅 Good morning!"
        : timeOfDay === "afternoon"
        ? "🌇 Good afternoon!"
        : "🌙 Good evening!"}
    </p>
  );
}

export default Greeting;
```

---

### 4️⃣ **Render All Components in `App.jsx`**

📁 **File Name:** `App.jsx`

👨‍💻 **Instructions:**
1. Import the `Weather`, `UserStatus`, and `Greeting` components.
2. Render each component with different props to test conditional rendering logic.

```jsx
import Weather from "./Weather";
import UserStatus from "./UserStatus";
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <h1>🎭 Conditional Rendering in React</h1>

      {/* Weather component */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />

      {/* UserStatus component */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />

      {/* Greeting component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />
      <Greeting />
    </div>
  );
}

export default App;
```

---

## 🎯 **What You Will Learn**
- Master the use of `if`, `else if`, and `else` for conditional logic.
- Implement conditional rendering with the `&&` operator for concise logic.
- Use the ternary operator to simplify condition-based rendering.

---

### 🧠 **Key Takeaways**
1. Conditional rendering enables dynamic and flexible UIs in React.
2. Combine JavaScript logic with JSX for robust rendering solutions.
3. Test each component with various props to ensure proper functionality.

Happy Coding! 🚀

