# **Week 2 - Day 3: JavaScript Basics Continued**  

Today, we delved deeper into JavaScript concepts, covering **conditionals**, **loops**, **functions**, and more. Here’s a summary of the topics we explored:

---

## **Topics Covered**

### **9. Conditionals** ✅  
Conditionals are used to execute code based on specific conditions.

#### **Types of Conditionals**  
1. **if-else**  
   Executes the code block if the condition evaluates to `true`, otherwise executes the `else` block.  
   ```javascript
   var age = 18;
   if (age > 18) {
     console.log("You are an adult!");
   } else {
     console.log("You are not an adult.");
   }
   ```

2. **else if**  
   Checks multiple conditions in sequence.  
   ```javascript
   var marks = 75;
   if (marks >= 90) {
     console.log("Grade A");
   } else if (marks >= 75) {
     console.log("Grade B");
   } else {
     console.log("Grade C");
   }
   ```

3. **Ternary Operator**  
   A shorthand for `if-else`.  
   ```javascript
   var age = 20;
   var result = age >= 18 ? "Adult" : "Minor";
   console.log(result);
   ```

4. **Switch Case**  
   Best suited for multiple fixed values.  
   ```javascript
   var day = 3;
   switch (day) {
     case 1:
       console.log("Monday");
       break;
     case 2:
       console.log("Tuesday");
       break;
     case 3:
       console.log("Wednesday");
       break;
     default:
       console.log("Invalid day");
   }
   ```

#### **Truthy and Falsy Values**  
**Falsy Values:**  
- `null`, `undefined`, `NaN`, `0`, `""`, `false`, `document.all`.  

**Truthy Values:**  
- All values except falsy ones.  

---

### **10. Loops** ✅  
Loops are used to repeat a block of code.

#### **Types of Loops**
1. **for loop**  
   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. **while loop**  
   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

3. **do-while loop**  
   Executes the code block at least once.  
   ```javascript
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

4. **forEach loop**  
   Works only with arrays.  
   ```javascript
   let arr = [1, 2, 3];
   arr.forEach((num) => console.log(num));
   ```

5. **for...of loop**  
   Iterates over iterable objects like arrays or strings.  
   ```javascript
   let str = "Hello";
   for (let char of str) {
     console.log(char);
   }
   ```

6. **for...in loop**  
   Iterates over object properties.  
   ```javascript
   let obj = { a: 1, b: 2 };
   for (let key in obj) {
     console.log(key + ": " + obj[key]);
   }
   ```

---

### **11. Functions** ✅  
Functions allow code reuse and encapsulation.

#### **Types of Functions**
1. **Function Statement**  
   ```javascript
   function greet() {
     console.log("Hello");
   }
   greet();
   ```

2. **Function Expression**  
   ```javascript
   const greet = function () {
     console.log("Hello");
   };
   greet();
   ```

3. **Anonymous Function**  
   Functions without a name, often used as arguments.  
   ```javascript
   setTimeout(function () {
     console.log("Anonymous Function");
   }, 1000);
   ```

4. **Fat Arrow Functions**  
   Introduced in ES6 for shorter syntax.  
   ```javascript
   const greet = () => console.log("Hello");
   greet();
   ```

   - **With Parameters**:  
     ```javascript
     const sum = (a, b) => a + b;
     console.log(sum(2, 3));
     ```

   - **Implicit Return**:  
     ```javascript
     const greet = () => "Hello";
     console.log(greet());
     ```

---

### **12. Return Statement** ✅  
The `return` statement specifies the value a function should return.  

```javascript
function sum(a, b) {
  return a + b;
}
let result = sum(5, 10);
console.log(result); // Output: 15
```

---

### **13. Undefined, Not Defined, Null** ✅  
**Undefined**: A variable is declared but not assigned a value.  
```javascript
var a;
console.log(a); // Output: undefined
```

**Not Defined**: Attempting to access a variable that hasn’t been declared.  
```javascript
console.log(b); // Error: b is not defined
```

**Null**: Represents the intentional absence of value.  
```javascript
var c = null;
console.log(c); // Output: null
```

---

## **Code Examples**

### **Conditionals**
```javascript
let age = 20;
if (age > 18) {
  console.log("You are eligible.");
} else {
  console.log("Not eligible.");
}
```

### **Loops**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i); // Prints numbers from 1 to 5
}
```

### **Fat Arrow Function**
```javascript
const greet = (name) => `Hello, ${name}`;
console.log(greet("Sambhav")); // Output: Hello, Sambhav
```

### **Undefined, Null**
```javascript
let a;
console.log(a); // Output: undefined

let b = null;
console.log(b); // Output: null
```

---

## **Takeaways**
- **Conditionals**: Mastered how to make decisions in JavaScript using `if`, `else`, `ternary`, and `switch`.  
- **Loops**: Gained hands-on experience with different types of loops.  
- **Functions**: Learned to write reusable code blocks using various function types.  
- **Return Statements**: Understood how to return values from functions.  
- **Undefined vs. Null**: Clarified these often-confused concepts.  

--- 

Happy Coding! 🚀