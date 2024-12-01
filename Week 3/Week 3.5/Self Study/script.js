// Task 7
// let length1 = parseInt(prompt("Enter Length of Side 1 of Triangle: "));
// let length2 = parseInt(prompt("Enter Length of Side 2 of Triangle: "));
// let length3 = parseInt(prompt("Enter Length of Side 3 of Triangle: "));

// let semiPerimeter = (length1 + length2 + length3)/2;

// let area = Math.sqrt(semiPerimeter * (semiPerimeter-length1) * (semiPerimeter-length2)*(semiPerimeter-length3))

// console.log(`Area of Triangle = ${area.toFixed(3)} sq units`);

// Task 8

// let num1 = parseInt(prompt("Enter Number 1: "));
// let num2 = parseInt(prompt("Enter Number 2: "));

// console.log(`Greatest between ${num1} and ${num2} is ${num1>num2 ? num1 : num2}`)

// Task 9

// let number = parseInt(prompt("Enter Number : "));

// console.log(`${number%2 === 0 ? `${number} is even number` : `${number} is odd number` }`)

// Task 12
// let year = parseInt(prompt("Enter Year : "));

// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log(`${year} is a leap year.`)
//         } else{
//             console.log(`${year} is not a leap year.`);
//         }
//     }else{
//         console.log(`${year} is a leap year.`)
//     }
// }else{
//     console.log(`${year} is not a leap year`);
// }

// if( isNaN(year) || year <= 0){
//     console.log("Invalid input. Please enter a positive integer.")
// }else if((year%4 === 0 && year%100 !== 0) || (year%400 ===0)){
//     console.log(`${year} is a leap year.`)
// }else{
//     console.log(`${year} is not a leap year.`);
// }

// Task 13

// let unitsConsumed = parseInt(prompt("Enter Units Consumed: "));
// if (isNaN(unitsConsumed) || unitsConsumed < 0) {
//     console.log("Please enter a valid positive number for units consumed.");
// } else {
//     let totalBill = 0;
//     if (unitsConsumed <= 100) {
//         totalBill = unitsConsumed * 4.2;
//     } else if (unitsConsumed <= 200) {
//         totalBill = 100 * 4.2 + (unitsConsumed - 100) * 6;
//     } else if (unitsConsumed <= 400) {
//         totalBill = 100 * 4.2 + 100 * 6 + (unitsConsumed - 200) * 8;
//     } else {
//         totalBill = 100 * 4.2 + 100 * 6 + 200 * 8 + (unitsConsumed - 400) * 13;
//     }
//     console.log(`Total bill amount: ${totalBill.toFixed(2)} rs`);
// }


// Task 14
// let totalPrice = parseInt(prompt("Enter Total Price : "));
// let discount = 0;

// if(isNaN(totalPrice) || totalPrice < 0){
//     console.log("Invalid input. Please enter a positive number for total price.")
// }else{
//     if(totalPrice>0 && totalPrice<=5000){
//         discount = 0;
//     }else if(totalPrice>5000 && totalPrice<=7000){
//         discount = (5/100)*totalPrice
//     }else if(totalPrice>7000 && totalPrice<=9000){
//         discount = (10/100)*totalPrice;
//     }else{
//         discount = (20/100)*totalPrice;
//     }
// }
// console.log(`Payable amount is ${totalPrice-discount}`)

// Task 15

// let n = parseInt(prompt("Enter the number : "));

// for(let i = 0; i<n ; i++){
//     console.log("Hello");
// }

// Task 16
// let n = parseInt(prompt("Enter the number : "));
// let s = ' ';
// for(let i = 1; i<=n; i++){
//     s += i + ' ';
// }
// console.log(s);

// Task 17
// let n = parseInt(prompt("Enter the number : "));
// let s = 0;

// for(let i = 1; i<=n; i++){
//     s += i;
// }
// console.log(`Sum of the first ${n} natural numbers: ${s}`);

// Task 18
// let n = parseInt(prompt("Enter the number : "));

// let factorial = 1;

// for(let i =1; i<=n; i++){
//     factorial = factorial * i;
// }

// console.log(`Factorial of ${n} is: ${factorial}`);

// Task 20

// let n = parseInt(prompt("Enter the number : "));
// let original = n;
// let sum = 0;

// while(n > 0){
//     sum = sum + n%10;
//     n = Math.floor(n/10);
// }

// console.log(`Sum of digits of ${original} is: ${sum}`);

// Task 123
// let n = parseInt(prompt("Enter the number : "));
// let reverse = 0 , remainder =0;

// while(n > 0){
//     remainder = n%10;
//     reverse = reverse * 10 + remainder;
//     n = Math.floor(n/10);
// }

// console.log(reverse);


