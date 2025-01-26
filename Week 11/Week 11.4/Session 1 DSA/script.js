function Question1(){
    let n = 100;
    let arr = [];
    for(let i = 0; i <= Math.floor(Math.sqrt(n)); i++){
        if(n % i == 0){
            if(i == n/i){
                arr.push(i);
            }else {
                arr.push(i);
                arr.push(n/i);
            }
        }
    }
    arr.sort((a,b)=> a-b);
    console.log(arr);
}

// Question1();

function printFactors(n) {
    let result = []; // To store factors
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                // If i is the square root of n, add it once
                result.push(i);
            } else {
                // Add both i and n/i
                result.push(i);
                result.push(n / i);
            }
        }
    }
    result.sort((a, b) => a - b); // Sort factors in ascending order
    console.log(result.join(",")); // Join factors with commas and print
}

// Call the function
printFactors(100);



