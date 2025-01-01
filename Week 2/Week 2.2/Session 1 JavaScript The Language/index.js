var x = 10;
x = 20; // Variable updated

const Y = 50;
// y = 100; // Error: Assignment to constant variable

// Primitive Types
var x = 12; // Integer
var y = "Hello"; // String
var z = true; // Boolean

// Reference Types
var arr = [1, 2, 3]; // Array
var obj = { a: 1 }; // Object
var func = function () {
  console.log("Hi");
}; // Function

// Primitive Example
var a = 2;
var b = a;
b = 4; // Changing `b` does not affect `a`
console.log(a); // Output: 2
console.log(b); // Output: 4

// Reference Example
var arr1 = [1, 2, 3];
var arr2 = arr1; // Both point to the same memory location
arr2.pop(); // Modifying `arr2` affects `arr1`
console.log(arr1); // Output: [1, 2]
console.log(arr2); // Output: [1, 2]

// Copying Arrays
var arr3 = [...arr1]; // Spread operator creates a copy
arr3.pop();
console.log(arr3); // Output: [1]
console.log(arr1); // Output: [1, 2]

console.log("Hello World!"); // Prints: Hello World!
console.warn("This is a warning!"); // Prints a warning
console.error("This is an error!"); // Prints an error

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

var arr1 = [1, 2, 3];
var arr2 = [...arr1]; // Creates a new array copy
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3]
console.log(arr2); // Output: [1, 2, 3, 4]
