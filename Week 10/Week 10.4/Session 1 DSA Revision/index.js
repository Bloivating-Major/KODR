function Question1(){
    // Leetcode 1748
    let nums = [1,2,3,2];
    let map = new Map();
    for(let i = 0; i <nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
    let sum = 0;
    for(let a of map.keys()){
        if(map.get(a)==1) sum += a;
    }
    return sum;
}

// Question1()

function Question2(){
    let names = ["Mary","John","Emma"], heights = [180,165,170];
    let map = new Map();
    for(let i =0; i < names.length; i++){
        map.set(heights[i], names[i]);
    }
    heights.sort((a,b)=> b-a)

    let ans = new Array(names.length);
    for(let i = 0; i < ans.length; i++){
        ans[i] = map.get(heights[i]);
    }
    return ans;
}

// Question2()

