// sum of n terms

// let n = 5;

// console.log(sumNTerm(n));

// function sumNTerm(n){
//     if(n == 1) return 1;
//     return n + sumNTerm(n-1);
// }

// factorial of n terms
// let n = 5;

// console.log(factOfNTerms(n));

// function factOfNTerms(n){
//     if(n ==1) return 1; 
//     return n * factOfNTerms(n-1);
// }

// sum of digits
// let digit = 12345;

// console.log(sumOfDigits(digit));

// function sumOfDigits(digit){
//     if(digit == 0) return digit;
//     return (digit%10) + sumOfDigits(Math.floor(digit/10))
// }

// reverse a digit
// let digit = 123;

// let rev = 0;
// console.log(reverseDigit(digit,rev));

// function reverseDigit(digit, rev){
//     if(digit==0) return rev;
//     let rem = digit % 10;
//     rev = (rev * 10) + rem;
//     return reverseDigit(Math.floor(digit/10), rev);    
// }

//Fibonacci Series using Recursion
// let num = 6;

// console.log(fibonacci(num));

// function fibonacci(num){
//     if(num == 0 || num == 1) return num;
//     return fibonacci(num-1) + fibonacci(num-2);
// }