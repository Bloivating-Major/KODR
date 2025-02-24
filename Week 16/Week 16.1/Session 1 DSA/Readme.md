# 🎓 **Week 16 Day 1 - DSA Session** 🚀  

## 🏷️ **Today's Topics Covered:**
1. 📚 **Classes and Objects**  
2. 🏗️ **Constructors**  

---

## 🔍 **1. Classes and Objects in JavaScript**  

### 🎯 **What is a Class?**  
A **class** is like a blueprint for creating objects with specific properties and methods. Think of it as a recipe 🍰—you can use the same recipe to bake as many cakes as you want, but each cake can have its own decorations!

### ✅ **Syntax of a Class:**  
```js
class ClassName {
  // Constructor method to initialize object properties
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }

  // Method inside the class
  displayInfo() {
    console.log(`Property 1: ${this.property1}, Property 2: ${this.property2}`);
  }
}
```

---

### 👤 **What is an Object?**  
An **object** is an instance of a class. Using the class blueprint, you can create multiple objects with their own unique values.  

For example:
```js
// Define a simple class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayCar() {
    console.log(`🚗 Brand: ${this.brand}, Model: ${this.model}`);
  }
}

// Create objects from the class
let car1 = new Car("Tesla", "Model S");
let car2 = new Car("BMW", "i8");

// Display object data
car1.displayCar();  // Output: 🚗 Brand: Tesla, Model: Model S
car2.displayCar();  // Output: 🚗 Brand: BMW, Model: i8
```

---

## 🏗️ **2. Constructors in JavaScript**  

### 💡 **What is a Constructor?**  
A **constructor** is a special method inside a class that gets called automatically when a new object is created from that class. It initializes object properties.  

**Syntax:**  
```js
class Example {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}
```

---

### 📘 **Real Example: Student Class**  

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display student details
  displayStudent() {
    console.log(`🎓 Name: ${this.name}, Age: ${this.age}`);
  }
}

// Creating student objects
let student1 = new Student("John", 20);
let student2 = new Student("Emma", 22);

// Displaying details
student1.displayStudent();  // 🎓 Name: John, Age: 20
student2.displayStudent();  // 🎓 Name: Emma, Age: 22
```

---

## 🛠️ **Why Use Classes and Constructors?**  
✅ **Reusable Code:** Write once, use multiple times.  
✅ **Easy Object Creation:** Quickly create multiple objects with different values.  
✅ **Encapsulation:** Group related properties and methods together.  

---

## 💻 **Bonus: Adding More Methods to Class**  

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`💰 ${amount} deposited. New balance: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`💸 ${amount} withdrawn. New balance: $${this.balance}`);
    } else {
      console.log(`❌ Withdrawal failed. Insufficient funds.`);
    }
  }
}

// Creating a bank account object
let myAccount = new BankAccount("Alex", 1000);

// Performing transactions
myAccount.deposit(500); // 💰 500 deposited. New balance: $1500
myAccount.withdraw(300); // 💸 300 withdrawn. New balance: $1200
myAccount.withdraw(2000); // ❌ Withdrawal failed. Insufficient funds.
```

---

## 🔥 **Key Takeaways**
- 📌 **Classes** are blueprints for creating objects.  
- 🚀 **Constructors** initialize object properties.  
- 🛡️ **Objects** are instances of a class, each having their own unique data.  
- 📖 Methods in a class allow objects to perform actions.  

---

## ❓ **Practice Questions** 💡  
1. Create a `Book` class with properties like `title`, `author`, and `price`. Add a method to display book details.  
2. Create a `Person` class that takes `name` and `birthYear`. Add a method to calculate the current age.  
3. Build a `Rectangle` class to calculate the area and perimeter using methods.  

---

## 🌟 **Final Thought**  
Using classes and objects makes your code organized and scalable. Mastering these foundational concepts in JavaScript will set you up for success in both **DSA** and real-world **project development**! 🚀  

Happy Coding! 😄💻