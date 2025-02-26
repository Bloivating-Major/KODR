// Binary Search Revision

// let arr = [2,3,4,6, 7,8,9,10,11,12,13,14,50];

// let start = 0, end = arr.length-1;
// let target = 3;
// let ans = -1;

// while(start <= end){
//     let mid = Math.floor(start + end / 2);
    
//     if(arr[mid] === target){
//         ans = mid;
//         break;
//     }
//     else if(arr[mid] < target){
//         start = mid + 1;
//     }
//     else{
//         end = mid - 1;
//     }
// }

// console.log(ans); // Output: 1

// Bubble Sort Revision

// let arr= [5,3,4,7,2,15,6,9];

// console.log(arr);

// let n = arr.length;

// for(let i = 0; i < n-1; i++){
//     for(let j = 0; j < n-1-i; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1]
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr);