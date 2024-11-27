// Task 14

// function calculateDiscount(totalAmount){
//     let discountRate;

//     if(totalAmount >0 && totalAmount <= 5000){
//         discountRate = 0;
//     }
//     else if(totalAmount > 5000 && totalAmount <=7000){
//         discountRate = 0.05;
//     }
//     else if(totalAmount > 7000 && totalAmount <=9000){
//         discountRate = 0.1;
//     }
//     else if(totalAmount > 9000 ){
//         discountRate = 0.2;
//     }

//     const discountAmount = discountRate * totalAmount
//     const payableAmount = totalAmount - discountAmount;

//     return payableAmount;
// }

// let totalAmount = parseInt(prompt("Enter a total amount : "))

// console.log("Payable Amount after discount : ", calculateDiscount(totalAmount));

//Task 13

// function calculateElectricityBill(units) {
//     let billAmount = 0; 
//     if (units <= 100) {
//       billAmount += units * 4.2;
//     } else if (units <= 200) {
//       billAmount = 100 * 4.2 + (units - 100) * 6;
//     } else if (units <= 400) {
//       billAmount = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
//     } else if (units <= 800) {
//       billAmount = 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;
//     } else {
//       console.log("Excessive usage. Please contact your electricity provider.");
//     } 
//     return billAmount;
//   }
  
//   let units = parseInt(prompt("Enter the number of units consumed: "));
  
//   console.log("Electricity Bill Amount: ", calculateElectricityBill(units));

//Task 15

// let n = parseInt(prompt("Enter the number : "));

// for(let i = 0; i<n ; i++){
//     console.log("Hello");
// }

// Task 16

// let n = parseInt(prompt("Enter the number : "));
// let sum = 0;
// for(let i = 1; i<=n ; i++){
//     sum+=i;
// }
// console.log(`Sum of the frist ${n} numbers is ${sum}`);

// Task 17
// let n = parseInt(prompt("Enter the number : "));
// let fact = 1;
// for(let i = 1; i<=n ; i++){
//     fact *=i;
// }
// console.log(`Factorial of the number ${n} is ${fact}`);

// let n = parseInt(prompt("Enter the number : "));

// for(let i = 1; i<=n/2; i++){
//     if(n%i === 0) console.log(i);
// }