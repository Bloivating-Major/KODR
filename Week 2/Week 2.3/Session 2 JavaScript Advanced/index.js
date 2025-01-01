var fruits = ["Apple", "Banana", "Mango", "Grapes", "Pineapple", "Strawberry"];

var arr = [1, 2, "Hello", 4, function () {}, []];
console.log(arr[3]); // Output: 4

var arr = [1, 2, 3, 4, 5];

arr.forEach(function (val) {
  console.log(val); // Prints each element
});

var fruit = {
  name: "Mango",
  color: "Yellow",
  size: "Small + Medium",
  taste: "Sweet",
};

// Accessing properties
console.log(fruit.name); // Output: Mango
console.log(fruit.taste); // Output: Sweet

// Object literal
var obj = {};

// Using `new Object()`
var obj2 = new Object();

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Sambhav");
person1.sayHello(); // Output: Hello, my name is Sambhav

console.log("Start");

setTimeout(() => {
  console.log("Async Task Complete");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Async Task Complete
