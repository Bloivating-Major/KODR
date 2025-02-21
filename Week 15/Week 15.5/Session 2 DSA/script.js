// LeetCode128();

function LeetCode128(){
    let nums = [100,4,200,1,3,2];
    let largest = 0;
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], true);
    }
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]-1)){
            map.set(nums[i], false);
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])){
            let counter = 1;
            while(map.has(nums[i]+counter)){
                map.set(nums[i]+counter, false);
                counter++;
            }
            largest = Math.max(largest, counter);
        }
    }
}

LeetCode128v2();

function LeetCode128v2(){
    let nums = [100,4,200,1,3,2];
    let numSet = new Set(nums); 
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { 
            let currentNum = num;
            let streak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    console.log( longest);
}