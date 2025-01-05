var minimumOperations = function(nums) {
    // Leetcode = 2357; Efficient Approach.
    let count = 0;
    let arr = new Array(101).fill(false);
    for(let i = 0; i < nums.length; i++){
        arr[nums[i]] = true;
    }
    for(i = 1; i < arr.length; i++){
        if(arr[i]) count++;
    }
    return count;
};

function question2357(){var minimumOperations = function(nums) {
    let count = 0;
    while (isNotZero(nums)) {
        let smallest = findMinimum(nums);
        subtractElement(nums, smallest);
        count++;
    }
    return count;
};

function isNotZero(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) return true;
    }
    return false;
}

function findMinimum(nums) {
    let min = 101;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0 && nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

function subtractElement(nums, x) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[i] -= x;
        }
    }
}}

// function question