// Task 20
// Sum of digit 
// Write a program to calculate the sum of digits of a number.

// let number = parseInt(prompt("Enter a number: "));
// let sum = 0;

// while (number > 0) {
//     sum += number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(sum);

//Task 21
// Write a program to accept a number and print its reverse. Input will not contain trailing zeros.

// let number = parseInt(prompt("Enter a number: "));
// let reverse = 0;

// while (number > 0) {
//     reverse = reverse * 10 + number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(reverse);

// Task 22
// Write a program to check if a number is a palindrome.

// let number = parseInt(prompt("Enter a number: "));
// let originalNumber = number;
// let reverse = 0;

// while (number > 0) {
//     reverse = reverse * 10 + number % 10;
//     number = Math.floor(number / 10);
// }
// console.log(reverse === originalNumber ? "Palindrome" : "Not a palindrome");

// Task 23
// Write a program to check if a number is a strong number.
// let number = parseInt(prompt("Enter a number: "));
// let originalNumber = number;
// let strong = 0;

// function factorial(n){
//     let fact = 1;
//     for(let i =1; i<=n; i++){
//         fact *= i;
//     }
//     return fact;
// }

// while (number > 0) {
//     let rem = number % 10;
//     strong += factorial(rem);
//     number = Math.floor(number / 10);
// }

// console.log(strong === originalNumber ? "Strong number" : "Not a strong number");

// Task 24

// let number = parseInt(prompt("Enter a number: "));
// let square = number * number, count = 0, originalNumber = number;

// while (number > 0) {
//     count++;
//     number = Math.floor(number / 10);
// }
//  console.log((square%Math.pow(10, count)) === originalNumber ? "Automorphic number" : "Not an automorphic number");

// Task 25

// let number = parseInt(prompt("Enter a number: "));

// function sumOfDigits(number){
//     let sum = 0;
//     while (number > 0 || sum > 9) {
//         if(number === 0){
//             number = sum;
//             sum = 0;
//         }
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// number = sumOfDigits(number);
// console.log(number);

