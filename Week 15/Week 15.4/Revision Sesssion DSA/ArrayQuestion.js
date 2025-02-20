let arr = [1, 2, 3 , 4, 5];
let k = 13;
// Question1(arr);  // Is Array Sorted?
// Question2(arr);  // Reverse Array
// Question3(arr); // Left Rotation By 1
// Question3v2(arr, k); // Left Rotation By K

function Question3v2(arr, k){
    // Left Rotation by K Times
    // Brute Force Logic
    let n = 1;
    console.log(arr);
    // while(n <= k){
    // let temp = arr[0];
    // for(let i = 0; i < arr.length-1; i++){
    //     arr[i] = arr[i+1];
    // }
    // arr[arr.length-1] = temp;
    // console.log(arr);
    // n++;
    // }
    // Now Output is
//     [ 2, 3, 4, 5, 1 ]
//     [ 3, 4, 5, 1, 2 ]
//     [ 4, 5, 1, 2, 3 ]
//     [ 5, 1, 2, 3, 4 ]
//     [ 1, 2, 3, 4, 5 ]
//     [ 2, 3, 4, 5, 1 ]
//     [ 3, 4, 5, 1, 2 ]
//     [ 4, 5, 1, 2, 3 ]
//     [ 5, 1, 2, 3, 4 ]
//     [ 1, 2, 3, 4, 5 ]
//     [ 2, 3, 4, 5, 1 ]
//     [ 3, 4, 5, 1, 2 ]
//     [ 4, 5, 1, 2, 3 ]
    // What we can notice here is that array comes to its original place after 5 rotations so can't we reduce the number of iterations based on this information?
    // we can mod our k's value by our array's length so that it won't be repeating itself again and again
    k = k % arr.length;
    while(n <= k){
        let temp = arr[0];
        for(let i = 0; i < arr.length-1; i++){
            arr[i] = arr[i+1];
        }
        arr[arr.length-1] = temp;
        console.log(arr);
        n++;
        }
    // Output
    // [ 1, 2, 3, 4, 5 ]
    // [ 2, 3, 4, 5, 1 ]
    // [ 3, 4, 5, 1, 2 ]
    // [ 4, 5, 1, 2, 3 ]
    // Still we are getting the same output in less iterations.
}

// Left Rotate Array 
function Question3(arr){
    // logic
    // 1    2   3   4   5
    // 2    3   4   5   1
    console.log(arr);
    let temp = arr[0];
    for(let i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = temp;
    console.log(arr);
    // This is Left Rotation by 1
}

// Reverse Array Question 2
function Question2(arr){
let i = 0, j = arr.length-1;

console.log(arr);

while(i <= j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++, j--;
}

console.log(arr);
}

// Is Array Sorted Question 1
function Question1(arr){
    let flag = 1;

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            console.log(arr[i]);
            flag = 0;
            break;
        }
    }
    
    if(flag) console.log("Sorted");
    else console.log("Not Sorted");
}







