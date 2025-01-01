# **Week 2 - Day 3: Advanced JavaScript Concepts**

---

## **Session 2: Advanced JavaScript Topics**

In this session, we delved deeper into JavaScript by exploring more advanced concepts, including **Arrays**, **Objects**, **Prototypes**, **Synchronous vs. Asynchronous JavaScript**, and **ES6 Features**.  

---

## **Topics Covered**

### **1. Arrays**
**What is an Array?**  
- A special type of object used to store multiple values of the same or different types.  
- **Example:**  
  ```javascript
  var fruits = ["Apple", "Banana", "Mango", "Grapes", "Pineapple", "Strawberry"];
  ```

**Indexing in Arrays:**  
- Index starts from **0**.  
- Example:  
  ```javascript
  var arr = [1, 2, "Hello", 4, function(){}, []];
  console.log(arr[3]); // Output: 4
  ```

**Why Use Arrays?**  
- To manage and store multiple data elements in a structured manner.

---

### **2. Looping Through Arrays**
To perform operations on all elements of an array, we can use loops.  

**Example:** Using `forEach` to iterate over an array.  
```javascript
var arr = [1, 2, 3, 4, 5];

arr.forEach(function(val) {
    console.log(val); // Prints each element
});
```

---

### **3. Objects**
**What is an Object?**  
Objects allow you to store **key-value pairs** to represent real-world entities with properties and values.  

**Example:**  
```javascript
var fruit = {
  name: "Mango",
  color: "Yellow",
  size: "Small + Medium",
  taste: "Sweet"
};

// Accessing properties
console.log(fruit.name);  // Output: Mango
console.log(fruit.taste); // Output: Sweet
```

**Why Use Objects?**  
- To store structured and descriptive data.  

**How to Create Objects?**  
```javascript
// Object literal
var obj = {};

// Using `new Object()`
var obj2 = new Object();
```

---

### **4. Prototypes**
Prototypes are a foundational concept in JavaScript that enable inheritance. Every JavaScript object has an internal prototype object (`__proto__`) that it can inherit properties and methods from.  

**Example:**  
```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Sambhav");
person1.sayHello(); // Output: Hello, my name is Sambhav
```

---

### **5. Prototypal Inheritance**
Objects in JavaScript can inherit from other objects. This is known as **Prototypal Inheritance**.  

**Example:**  
```javascript
const parent = {
  greet: function() {
    console.log("Hello from the parent!");
  }
};

const child = Object.create(parent);
child.greet(); // Output: Hello from the parent!
```

---

### **6. Synchronous vs. Asynchronous JavaScript**
**Synchronous JavaScript**  
- Executes code **line by line** in a sequential manner.  

**Asynchronous JavaScript**  
- Executes code **non-linearly**, allowing other tasks to be processed while waiting for some tasks to complete.  

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async Task Complete");
}, 2000);

console.log("End");
// Output: 
// Start
// End
// Async Task Complete
```

---

### **7. ES6 Features (Climax)**  
The **ECMAScript 2015 (ES6)** update introduced several features that enhance JavaScript programming.  

**Highlights:**  
1. **Arrow Functions:**  
   ```javascript
   const add = (a, b) => a + b;
   console.log(add(2, 3)); // Output: 5
   ```

2. **Template Literals:**  
   ```javascript
   const name = "Sambhav";
   console.log(`Hello, ${name}!`); // Output: Hello, Sambhav!
   ```

3. **Spread Operator:**  
   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5];
   console.log(arr2); // Output: [1, 2, 3, 4, 5]
   ```

4. **Default Parameters:**  
   ```javascript
   const greet = (name = "Guest") => console.log(`Hello, ${name}!`);
   greet(); // Output: Hello, Guest!
   ```

5. **Destructuring:**  
   ```javascript
   const user = { name: "Sambhav", age: 20 };
   const { name, age } = user;
   console.log(name); // Output: Sambhav
   console.log(age);  // Output: 20
   ```

---

## **Takeaways**
1. Arrays and objects are fundamental data structures in JavaScript.  
2. Prototypes and prototypal inheritance provide a powerful way to share behaviors among objects.  
3. Understanding synchronous vs. asynchronous execution is crucial for handling JavaScript tasks.  
4. ES6 features improve code readability, efficiency, and scalability.

---

Happy Coding! 🚀  