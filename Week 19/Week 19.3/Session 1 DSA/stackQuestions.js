// Question 1
// GFG Next Greater Element

function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop(); // Remove smaller elements
        }
        
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1]; // Next greater element
        }

        stack.push(arr[i]); // Push current element
    }

    return result;
}

// Example
console.log(nextGreaterElement([1, 3, 2, 4])); // Output: [3, 4, 4, -1]

// Question 2
// Smaller on Left Element

function smallestOnLeft(arr, n) {
    let ans = [];
    let sortedSet = new Set(); // To maintain sorted order
    
    for (let i = 0; i < n; i++) {
        let maxSmaller = -1;
        
        // Iterate over sortedSet to find the greatest smaller element
        for (let val of sortedSet) {
            if (val < arr[i]) {
                maxSmaller = val;
            } else {
                break; // No need to check further as it's sorted
            }
        }
        
        ans.push(maxSmaller);
        sortedSet.add(arr[i]); // Insert the current element
    }
    
    return ans;
}

// Example Test Case
console.log(smallestOnLeft([3, 5, 4, 2, 2, 5, 5, 4, 2, 5], 10)); 
// Output: [-1, 3, 3, -1, -1, 4, 4, 3, -1, 4]

// Question 3
class Solution {
    help_classmate(arr,n){
        const stack = []
        const students = new Array(n).fill(-1)
 
        
        for(let i = n-1; i >= 0; i--){
            
            while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
                stack.pop()
            }
            
            let len = stack.length
            
            if (len > 0) students[i] = stack[len-1]
            
            stack.push(arr[i])
        }
        
        return students
    }
}

// Question 4

class SolutionQ4{
calculateSpan(arr) {
    // write code here
     let n = arr.length;
let span = new Array(n);
let stk = [];

// Process each day's price
for (let i = 0; i < n; i++) {

    // Remove elements from the stack while the current
    // price is greater than or equal to stack's top price
    while (stk.length > 0
           && arr[stk[stk.length - 1]] <= arr[i]) {

        stk.pop();
    }

    // If stack is empty, all elements to the left are smaller
    // Else, top of the stack is the last greater element's index
    if (stk.length === 0) {
        span[i] = (i + 1);
    }
    else {
        span[i] = (i - stk[stk.length - 1]);
    }

    // Push the current index to the stack
    stk.push(i);
}

return span;
}
}