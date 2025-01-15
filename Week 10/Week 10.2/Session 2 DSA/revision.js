function Question1(){
    let candyType = [1,1,2,3];
    let set = new Set(candyType);
    console.log(set);

    let size = candyType.length / 2;

    if(size >= set.size) console.log("Max Candies she can have is ", set.size);
    else console.log("Min Candies she can have is ", size); 
}

function Question2(){
    let nums =  [1,2,2,4];
    let set = new Set();
    let dup = 0;
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) dup = nums[i];
        else set.add(nums[i]);
    }
    let count = 1;
    for(let i = 0; i < set.size; i++){
        if(set.has(count)) count++;
        else return [dup, count];
    }
    return [dup, count];
}

// New Concepts of Map
let map = new Map();

map.set("raj", 5);
map.set("amit", 7);
map.set("kunal", 5);
map.set("raj", 9);
map.set(10, 5);

console.log(map);
