// let n = 5;

// for(let i=1; i<=10; i++ ){
//     console.log(`${n} x ${i} = ${n*i}`);
// } Question 1 ✅

// let rating = prompt('Enter Rating of Movie');
// let movieName = prompt('Enter Name of Movie');

// if(rating >=0 && rating <=2){
//     console.log(`Movie: ${movieName} - Flop`);
// }else if(rating >2 && rating <= 3.4){
//     console.log(`Movie: ${movieName} - Semi-Hit`);
// }else if(rating >3.4 && rating <= 4.5){
//     console.log(`Movie: ${movieName} - Hit`);
// }else if(rating >4.5 && rating <= 5){
//     console.log(`Movie: ${movieName} - Super-Hit`);
// }
// } Question 2 ✅ 

// ISBN Number

let number = parseInt(prompt('Enter ISBN Number of Book : '));
let copy = number;
let ISBN = number;
let sum = 0;
let count = 0;

while(number >0){
    count++;
    number = Math.floor(number/10);
}

if(count == 10 || count == 13) {
    for(let i=1; i<=10; i++){
        let digit = copy % 10;
        sum += digit * i;
        number = Math.floor(copy / 10);      
    }
    
    if(sum % 11 === 0){
        console.log(`Number : ${ISBN} is Legal Number`);
    }else{
        console.log(`Number : ${ISBN} is Illegal Number`);
    }
}
else{        
    console.log('Invalid ISBN Number');
}
// Question 4 ✅ 

// Greatest Common Divisor 

// let num1 = prompt('Enter number 1: ');
// let num2 = prompt('Enter number 2: ');
// let hcf = 1;
// for(let i=1; i<=num1 && i<=num2; i++){
//     if(num1%i === 0 && num2%i ===0){
//         hcf = i
//     }
// }

// console.log(hcf);

// let n = 5;

// for(let i = 1; i <=n; i++){
//     for(let j =1 ; j <=n; j++){
//         if(j==i){
//         process.stdout.write(`* `)
//         }
//     }
//     console.log();
// }

