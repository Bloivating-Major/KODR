# **React and JavaScript Concepts: Learning from Sessions with Sarthak Bhaiya and Ali Bhaiya** 🚀  

Today’s learning sessions were packed with insightful concepts and practical implementations. Here's a summary of what we covered:  

---

## **Session 1: React - `useEffect` and `useRef` Hooks with Sarthak Bhaiya**  

### **Key Topics Covered**  
1. **`useEffect` Hook**:  
   - Enables performing side effects in React components, like updating DOM elements after rendering.  
   - Dependency array ensures the effect runs only when specified variables change.  

2. **`useRef` Hook**:  
   - Provides a mutable reference to a DOM element or a value that persists across renders.  
   - Perfect for directly manipulating DOM elements without triggering re-renders.  

---

### **Implementation: Moving and Rotating an Image**  

This example demonstrates how `useEffect` and `useRef` hooks can be used to manipulate an image's position and rotation dynamically.  

#### **Code Snippet**  

```javascript
import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Rotate, setRotate] = useState(0);
  const deadPoolImage = useRef(null);

  useEffect(() => {
    deadPoolImage.current.style.top = Y + "%";
    deadPoolImage.current.style.left = X + "%";
    deadPoolImage.current.style.rotate = Rotate + "deg";
  }, [X, Y, Rotate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-y-hidden">
      <img
        src="https://i.pinimg.com/736x/76/a7/0f/76a70f50208522e860bcd7d84d53d2c9.jpg"
        alt=""
        className="h-[30vh] w-[15vw] rounded-full absolute"
        ref={deadPoolImage}
      />
      <button
        className="py-4 px-6 bg-violet-700 rounded-md absolute"
        onClick={() => {
          setX(Math.random() * 90);
          setY(Math.random() * 90);
          setRotate(Math.random() * 360);
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default App;
```  

### **Key Learnings**  
- How `useRef` enables direct manipulation of DOM elements.  
- Using `useEffect` to synchronize UI updates with state changes.  
- Practical implementation of randomizing positions and rotations in a React component.  

---

## **Session 2: JavaScript String Manipulations with Ali Bhaiya**  

### **Key Topics Covered**  

1. **String Basics**:  
   - **Immutability**: Strings cannot be changed directly; new strings are created through concatenation.  
   - String manipulation using methods like `.concat()`, `.charAt()`, `.length`, and `for` loops.  

2. **Practical String Questions**:  
   - **Reverse a String**: Iterating over a string backward to construct the reversed version.  
   - **Check for Palindrome**: Comparing characters from both ends to determine if the string reads the same backward.  
   - **Count Vowels, Consonants, Numbers, and Spaces**: Using character checks and ASCII values to classify characters.  

---

### **Code Snippets**  

#### **Reverse a String**  

```javascript
let str = "hello";
let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(str);
console.log(reverse);
```  

#### **Check for Palindrome**  

```javascript
let str = "Madam";
str = str.toLowerCase();
let isPalindrome = true;
let i = 0;
let j = str.length - 1;

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome = false;
    break;
  }
  i++;
  j--;
}

console.log(isPalindrome);
```  

#### **Vowels, Consonants, Numbers, and Spaces**  

```javascript
let text = "Hello There this is Sambhav55555";

let vowelCount = 0,
  consonantCount = 0,
  spaceCount = 0,
  numberCount = 0;

for (let char of text) {
  if ("aeiou".includes(char.toLowerCase())) vowelCount++;
  else if (char === " ") spaceCount++;
  else if (!isNaN(char)) numberCount++;
  else consonantCount++;
}

console.log(`Vowels: ${vowelCount}, Consonants: ${consonantCount}, Numbers: ${numberCount}, Spaces: ${spaceCount}`);
```  

---

### **Key Learnings**  
- Strings in JavaScript are immutable but can be manipulated to create new strings.  
- Iterating over strings to solve common problems like reversing, palindrome checking, and classification.  
- ASCII values can be used to identify numbers, letters, and other characters.  

---

## **Takeaway**  
Today's sessions provided hands-on experience with React hooks (`useEffect` and `useRef`) and JavaScript string manipulation. By solving practical problems and implementing real-world examples, we developed a deeper understanding of these fundamental concepts.  

### 📚 **Next Steps**  
- Dive deeper into React hooks like `useContext` and `useReducer`.  
- Practice solving more string manipulation problems to strengthen JavaScript skills.  

Let's keep learning and building! 🚀  