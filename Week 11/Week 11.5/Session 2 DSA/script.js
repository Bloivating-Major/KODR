// let n = 11;

// let count = 0;

// if(n <= 1) console.log("Not Prime");
// else{
//     for(let i =1; i <=n/2; i++){
//         if(n % i == 0) count++;
//     }
// }

// if(count == 1) console.log("Prime Number");


let n = 11;

if(isPrime(n)) console.log("Prime Number");
else console.log("Not Prime Number");

function isPrime(num) {
    if(num <= 1) return false;
    if(num == 2) return true;
    if(num%2 == 0) return false;
    for(let i = 3; i <= Math.floor(Math.sqrt(num)); i+=2){
        if(num % i == 0) return false;
    }
}

