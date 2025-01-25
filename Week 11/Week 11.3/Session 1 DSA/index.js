// Find Factorial
// let a = 20;
// let b = 32;
// let c = a < b ? a : b;

// console.log(findFactorial(a, b, c));

// function findFactorial(a,b,c){
//     if(c == 1) return c;
//     if(a % c == 0 && b % c == 0) return c;
//     return findFactorial(a, b, c - 1);
// }

// one more method

// console.log(GCD(a,b));
// function GCD(a,b){
//     if(a == b) return a; 
//     if( a > b) return GCD(a-b, b)
//     else return GCD(a, b -a);
// } 

// let n = 5;

// temp(n);

// function temp(n){
//     if(n == 0) return;
//     console.log(n);
//     temp(--n);
// }

// let n = 50;

// factor(n,1);

// function factor(n, i){
//     if ( n % i == 0) console.log(i);
//     if( i > Math.floor(n/2)) {
//         console.log(n);
//         return
//     }
//     factor(n, i + 1);
// }

// Find factors of a number

// let n = 50;

// factor(n, 1);

// function factor(n , i){
//     if( n % i == 0) console.log(i);
//     if( i > Math.floor(n/2)){
//         console.log(n);
//         return;
//     }
//     factor(n, i + 1);
// }