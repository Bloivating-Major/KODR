let prompt = require("prompt-sync")

let n = Number(prompt("Enter a number"));

towerOfHanoi(n, "Source", "Destination", "Helper");


function towerOfHanoi(n, s, d, h){
    if(n === 1){
        console.log("Move 1 plate from" + s + " to" + d);
        return;
    }
    towerOfHanoi(n-1, s, h, d);
    console.log("Move" + n + " th plate from " + s + " to" + d  );
    towerOfHanoi(n-1, h, d, s);
}


var solve = function(arr, k , i){
    if(arr.length === 1) return arr[0];
    i = (i+k)%arr.length
    arr.splice(i, 1);
    return solve(arr, k , i);
}

var findTheWinner = function(n, k) {
    k--; // Adjust k for 0-based indexing in the 'solve' function
    let arr = new Array(n);
    for(let i = 0; i < arr.length; i++){
        arr[i] = i + 1; // Initialize players array [1, 2, ..., n]
    }
    let ans = solve(arr, k , 0); // Start the recursive magic!
    return ans; // The ultimate winner!
};