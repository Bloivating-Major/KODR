Here’s a combined **README** summarizing both sessions from today:

---

# **Daily Learning Log: React and JavaScript Mastery**

Today’s sessions were packed with learning and implementation. We focused on enhancing skills in **React** and **JavaScript**, exploring advanced topics like theme switching in React and efficient string and array manipulations in JavaScript.

---

## **Session 1: Learning React - Theme Switcher**

### **Overview**
We built a React application featuring a **Theme Switcher** that allows users to toggle between `light` and `dark` themes. The selected theme persists across page reloads using `localStorage`.

### **Key Concepts**
1. **useState Hook**: Managed the theme state (`light` or `dark`).
2. **useEffect Hook**: Applied the theme dynamically whenever it changed.
3. **useRef Hook**: Manipulated the DOM element to reflect the current theme.
4. **localStorage**: Ensured the theme persisted even after a page refresh.

### **Features**
1. **Dynamic Theme Switching**: A button toggles between light and dark themes.
2. **Persistent State**: The selected theme is saved in `localStorage`.
3. **Navigation Bar**: A basic navbar with simple links.

### **Code Snippet**
```javascript
import { useEffect, useRef, useState } from "react";

const App = () => {
  const mainRef = useRef(null);
  const [Theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));

  const changeTheme = () => {
    if (Theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    mainRef.current.setAttribute('id', Theme);
  }, [Theme]);

  return (
    <div>
      <main ref={mainRef} className="font-raleway font-bold text-xl flex gap-40 text-center h-screen w-full flex-col items-center">
        <nav className="w-full flex justify-center items-center py-7">
          <ul className="flex gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="px-5 py-3 shadow-xl rounded-md w-1/3" onClick={changeTheme}>Theme</button>
        <p>This is a simple React app.</p>
      </main>
    </div>
  );
};

export default App;
```

---

## **Session 2: String Manipulations and Array Operations in JavaScript**

### **Overview**
We delved into various string manipulation techniques and array operations, solving practical problems to solidify these concepts.

### **Topics Covered**
#### **1. Case Conversion for Strings**
- Transformed uppercase letters to lowercase and vice versa.
- Preserved spaces and special characters.
  
**Code Snippet**:  
```javascript
let s = "HELLO world";
let t = '';

for (let i = 0; i < s.length; i++) {
  if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
    t += String.fromCharCode(s[i].charCodeAt() + 32);
  } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
    t += String.fromCharCode(s[i].charCodeAt() - 32);
  } else {
    t += s[i];
  }
}
console.log(t);
```

#### **2. Finding Words Starting with a Specific Prefix**
- Used `startsWith` to identify words that start with a given prefix.

**Code Snippet**:  
```javascript
let words = ["pay", "attire", "practice", "attend"];
let pref = 'at';
let ans = [];

words.forEach((word) => {
  if (word.startsWith(pref)) {
    ans.push(word);
  }
});

console.log("Words starting with pref =", ans.join(", "));
```

#### **3. Capitalizing the First Letter of Each Word**
- Splitted a sentence, capitalized the first letter of each word, and logged the result.

**Code Snippet**:  
```javascript
let arr = "Hello bhai kya hal chal";
let splitedArr = arr.split(" ");

splitedArr.forEach(word => {
  console.log(word.charAt(0).toUpperCase() + word.substring(1));
});
```

#### **4. String Manipulation Methods**
We explored numerous JavaScript string methods:
- **toLowerCase/toUpperCase**: Convert string cases.
- **concat**: Join strings.
- **substring**: Extract substrings.
- **replaceAll**: Replace all occurrences.
- **split**: Split strings by a delimiter.
- **trimEnd**: Remove trailing spaces.

**Examples**:  
```javascript
let s = " hello bhai%hello hello hello";
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.replaceAll("hello", "hey"));
console.log(s.split("%"));
```

---

## **Takeaways from Today**
1. **React**:
   - Learned to build a theme switcher using `useState`, `useEffect`, and `localStorage`.
   - Practiced dynamic DOM manipulation with `useRef`.
2. **JavaScript**:
   - Enhanced string manipulation and array operation skills.
   - Solved real-world problems like case conversion, prefix search, and capitalization.

---

This comprehensive learning session reinforced core programming skills and practical implementation of concepts. 🚀