var solve = function(nums, ans, current, i){
    // Base Case
    if(i === nums.length){
        ans.push([...current]);
        return;
    }

    // Pick
    current.push(nums[i]);
    solve(nums, ans, current, i+1);

    // We will pop because arrays are mutable
    current.pop();

    // Not Pick
    solve(nums, ans, current, i+1);
}

var subsets = function(nums) {
    let ans = [];
    let current = [];
    solve(nums, ans, current, 0);
    return ans;
};


// Solved Power Set
class Solution {
    
    solve(s, ans, cur, i){
        if(i===s.length){
            if(cur.length !== 0) ans.push(cur);
            return;
        }
        this.solve(s, ans, cur+s.charAt(i), i+1);
        this.solve(s, ans, cur, i+1);
    }

    AllPossibleStrings(s){
        //code here
        let ans = [];
        let cur = "";
        this.solve(s, ans, cur, 0);
        ans.sort();
        return ans;
    }
}

// Solved Permutations Question

// Optimized Permutations
var permute = function(nums) {
    const result = []; // Array to store all permutations
    const currentPermutation = []; // Array to build current permutation
    const used = new Array(nums.length).fill(false); // Track used numbers

    function permuteRecursive() {
        // Base Case: If current permutation is complete
        if (currentPermutation.length === nums.length) {
            result.push([...currentPermutation]); // Add a COPY of the permutation
            return;
        }

        // Recursive Step: Try each number from nums
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) { // If nums[i] is not already used
                used[i] = true; // Mark as used
                currentPermutation.push(nums[i]); // Add to current permutation
                permuteRecursive(); // Recursive call for next position
                currentPermutation.pop(); // Backtrack: Remove last added number
                used[i] = false; // Backtrack: Mark as not used for other permutations
            }
        }
    }

    permuteRecursive(); // Start the recursive process
    return result;
};

// More Optimal Version without using extra space
var permute = function(nums) {
    const result = [];

    function permuteRecursive(nums, start) {
        if (start === nums.length) {
            result.push([...nums]); // Base case: Add a COPY of nums
            return;
        }

        for (let i = start; i < nums.length; i++) {
            swap(nums, start, i); // Swap current element to the start position
            permuteRecursive(nums, start + 1, result); // Recurse for the rest
            swap(nums, start, i); // Backtrack: Swap back to restore original order
        }
    }

    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Simple swap function
    }

    permuteRecursive(nums, 0, result);
    return result;
};
