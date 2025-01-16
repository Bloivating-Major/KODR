# Lecture 1: All Fundamentals of JavaScript 🚀

Welcome to the first lecture of your **Backend Development Journey**! This lecture covers the fundamental concepts of JavaScript, ranging from arrays to asynchronous programming. Let's dive in! 🎉

---

## 🌟 Fundamentals of JavaScript

### 1. Arrays 📚
- **Defining an Array:**
  ```javascript
  var arr = [1, 2, 3, 4, 5, "hey", {}, true, function(d) { return d; }];
  ```
  - JavaScript allows arrays with mixed data types.
  - No restriction on having similar value types in an array.

- **Common Array Methods:**
  - **forEach**: Iterates through each element of the array.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    arr.forEach((val) => {
      console.log(val);
    });
    ```
  - **map**: Returns a new array modified based on the original array.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    let ans = arr.map((val) => {
      return 13;
    });
    console.log(ans); // [13, 13, 13, 13, 13]
    ```
  - **filter**: Filters elements based on a condition.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    let ans = arr.filter((val) => val > 3);
    console.log(ans); // [4, 5]
    ```
  - **find**: Finds and returns the first element that matches a condition.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    let ans = arr.find((val) => val == 3);
    console.log(ans); // 3
    ```
  - **indexOf**: Returns the index of an element, or -1 if not present.
    ```javascript
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.indexOf(5)); // 4
    ```

---

### 2. Objects 🛠️
- **Defining an Object:**
  ```javascript
  let obj = {
    name: "Sambhav",
    age: 20,
  };
  ```
  - Objects consist of **key-value pairs**.
  - Access values using:
    ```javascript
    obj.name; // "Sambhav"
    obj["age"]; // 20
    ```
  - Modify values:
    ```javascript
    obj.age = 24;
    ```
  - Prevent modification using:
    ```javascript
    Object.freeze(obj);
    ```

---

### 3. Functions 🎯
- **Finding Function Length:**
  ```javascript
  function abcd(a, b, c) {}
  console.log(abcd.length); // 3
  ```
  - The length of a function is the number of parameters it accepts.

- **Return Statements:**
  ```javascript
  function abc() {
    return 13;
  }

  var ans = abc(); // 13
  ```
  - The value is returned to the place where the function is called.

---

### 4. Async JavaScript 🌐
- **Fetching Data Asynchronously:**
  ```javascript
  let blob = await fetch('https://randomuser.me/api');
  let res = await blob.json();
  console.log(res);
  ```

- **Understanding Sync vs Async:**
  - **Synchronous Code:** Executed line by line.
  - **Asynchronous Code:** Moved to a side stack, and the next line is executed.
  - The main stack executes synchronous code first, followed by asynchronous code.

- **Using Async Functions:**
  ```javascript
  async function abcd() {
    let blob = await fetch(`https://randomuser.me/api/`);
    let res = await blob.json();
    console.log(res);
  }
  abcd();
  ```

---

### 🌟 Key Takeaways:
- Arrays can hold mixed data types and are incredibly flexible.
- Objects use key-value pairs for structured data.
- JavaScript functions can return values and have properties like `.length`.
- Async code helps handle operations like fetching data from APIs efficiently.

---

Keep practicing these concepts to strengthen your JavaScript fundamentals! 💪✨

