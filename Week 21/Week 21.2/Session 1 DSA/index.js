// Subset 2 Question Solved
var solve = function (nums, i, ans, cur){
    if(i === nums.length){
        ans.push([...cur]);
        return;
    }
    // pick
    cur.push(nums[i]);
    // call the solve function again
    solve(nums, i+1, ans, cur);
    // pop the element
    cur.pop();
    // here we will remove duplicate values
    // our index should be less than array and if we find dup we will increment our index
    while(i+1 < nums.length && nums[i] === nums[i+1]) i++;
    // again not pick function call
    solve(nums, i+1, ans, cur);
}

var subsetsWithDup = function(nums) {
    
    // We have to ignore the duplicate values so we will check using a while loop when we iterate over array
    // also we will first sort our array
    nums.sort();
    let ans = [];
    let cur = [];
    solve(nums, 0 , ans, cur);
    return ans;
};

// Leetcode Letter combination of a phone number
var solve = function(dig, i, cur, ans, map){
    if(i === dig.length){
        if(cur.length > 0) ans.push(cur);
        return;
    }

    // Now we will iterate over the values of dig
    let s = map.get(dig.charAt(i));
    for(let j = 0; j < s.length; j++){
        solve(dig, i+1, cur + s.charAt(j), ans, map);
    }
}

var letterCombinations = function(digits) {
    // We will use a map to store our letters for particular number
    let ans = [];
    let map = new Map();
    map.set("2", "abc");
    map.set("3", "def");
    map.set("4", "ghi");
    map.set("5", "jkl");
    map.set("6", "mno");
    map.set("7", "pqrs");
    map.set("8", "tuv");
    map.set("9", "wxyz");
    // Recursive function call
    solve(digits, 0, "", ans, map);
    return ans;
};