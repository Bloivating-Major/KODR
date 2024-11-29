// Task 26
// Fibonacci Series

// let n = parseInt(prompt("Enter the number of terms: "));
// let a = 0,
//   b = 1;
// let s = a + " " + b + " ";
// if (n <= 0) {
//   console.log("Invalid input");
// } else if (n == 1) {
//   console.log(a);
// } else if (n == 2) {
//   console.log(s);
// } else {
//   for (let i = 0; i < n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     s += c + " ";
//   }
//   console.log(s);
// }

// Task 28
// Calculator

// do {
//   let choice = prompt(
//     "Choose an operation: \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Exit"
//   );
  
//   if (choice === "5") {
//     alert("Exiting...");
//     break;
//   }
//   if(choice < 1 || choice > 4) {
//     alert("Invalid choice");
//     continue;
//   }

//   let num1 = parseInt(prompt("Enter the first number: "));
//   let num2 = parseInt(prompt("Enter the second number: "));
//   let result;
  
//   switch (choice) {
//     case "1":
//       result = num1 + num2;
//       alert(`Sum = ${result}`);
//       break;
//     case "2":
//       result = num1 - num2;
//       alert(`Difference = ${result}`);
//       break;
//     case "3":
//       result = num1 * num2;
//       alert(`Product = ${result}`);
//       break;
//     case "4":
//       result = num1 / num2;
//       alert(`Quotient = ${result}`);
//       break;
//   }

//   let n = prompt("Do you want to continue? (y/n)").toLowerCase();
//   if (n === "n") {
//     alert("Exiting...");
//     break;
//   } else if (n !== "y") {
//     alert("Invalid choice. Exiting...");
//     break;
//   }
// } while (true);
    