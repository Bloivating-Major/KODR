# **Week 2 - Day 2: JavaScript Basics**  

In today's session, we covered foundational concepts of **JavaScript**, including its history, basic features, data types, and memory operations. Here's an overview of what we learned:

---

## **Introduction to JavaScript**  
➡️ Developed by **Brendan Eich** in **1995**.  
➡️ Managed and standardized by **EcmaScript (ES)**.  

- **ES5**: Older version (before 2015).  
- **ES6**: Modern version (introduced in 2015).  

**Two Key Parts:**  
1. **JavaScript Language**: Core coding language.  
2. **DOM (Document Object Model)**: Adds functionality to web pages.  

---

## **Key Concepts Learned**

### **1. Linking JavaScript Files**  
- JavaScript files are linked using the `<script>` tag placed before the closing `</body>` tag.  
  ```html
  <script src="script.js"></script>
  ```

---

### **2. Console Operations**  
- The **Console** is used to interact with the browser's debugging tool.  
  **Common Methods:**  
  - `console.log`: Prints output to the console.  
  - `console.warn`: Displays warnings.  
  - `console.error`: Displays errors.  

---

### **3. Variables and Constants**  
- **Variables**: Data that can change during program execution.  
  ```javascript
  var x = 10; 
  x = 20; // Variable updated
  ```  
- **Constants**: Fixed data that cannot be changed.  
  ```javascript
  const y = 50; 
  // y = 100; // Error: Assignment to constant variable
  ```  
**Scope:**  
- `var` has function-level scope.  
- **Memory Usage:**  
  - **Heap Memory**: Used for browser-based objects.  
  - **Stack Memory**: Used for function execution context.

---

### **4. Compilers and Interpreters**  
- **Compiler**: Converts entire code to machine language before execution.  
  - **Fast execution** but **slow conversion**.  
- **Interpreter**: Executes code line by line.  
  - **Fast conversion** but **slow execution**.  
- **JIT (Just-In-Time Compiler)**: Combines the advantages of both.  

---

### **5. Window Object**  
JavaScript uses browser-provided features like `alert`, `prompt`, `setTimeout`, etc. These are part of the **Window Object** (not JavaScript itself).

---

### **6. Data Types**  
**Two Main Types:**  
1. **Primitive**:  
   - Examples: `12`, `"Sam"`, `true`, `null`, `undefined`.  
2. **Reference**:  
   - Examples: Arrays `[]`, Objects `{}`, Functions `()`.  

#### **Examples:**
```javascript
// Primitive Types
var x = 12;       // Integer
var y = "Hello";  // String
var z = true;     // Boolean

// Reference Types
var arr = [1, 2, 3];  // Array
var obj = { a: 1 };   // Object
var func = function() { console.log("Hi"); };  // Function
```

#### **Key Difference Between Primitive and Reference Types:**
```javascript
// Primitive Example
var a = 2;
var b = a;
b = 4; // Changing `b` does not affect `a`
console.log(a); // Output: 2
console.log(b); // Output: 4

// Reference Example
var arr1 = [1, 2, 3];
var arr2 = arr1; // Both point to the same memory location
arr2.pop();      // Modifying `arr2` affects `arr1`
console.log(arr1); // Output: [1, 2]
console.log(arr2); // Output: [1, 2]

// Copying Arrays
var arr3 = [...arr1]; // Spread operator creates a copy
arr3.pop();
console.log(arr3); // Output: [1]
console.log(arr1); // Output: [1, 2]
```

---

### **Code Examples**
#### **Console Operations**
```javascript
console.log("Hello World!");  // Prints: Hello World!
console.warn("This is a warning!");  // Prints a warning
console.error("This is an error!");  // Prints an error
```

#### **Variable Scope and Constants**
```javascript
function test() {
  var x = 10; // `var` has function-level scope
  if (true) {
    var y = 20;
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
}

const PI = 3.14; // Constant
// PI = 22/7; // Error: Assignment to constant variable
```

#### **Copying Arrays Using Spread Operator**
```javascript
var arr1 = [1, 2, 3];
var arr2 = [...arr1]; // Creates a new array copy
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: [1, 2, 3, 4]
```

---

## **Takeaways**
- **JavaScript Basics**: Understanding variables, constants, and data types.  
- **Memory Management**: Differentiating between primitive and reference types.  
- **Browser Features**: Leveraging the `Window` object for alerts, prompts, and more.  
- **Modern JavaScript**: Using the **spread operator** for copying arrays and objects.  

---

Happy Coding! 🚀