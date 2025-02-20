var longestPalindrome = function(s){
    let sum = 0;
    let map = new Map();
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        map.set(ch, (map.get(ch) || 0)+1)
    }
    for(let key of map.keys()){
        if(map.get(key)>=3) sum+= map.get(key)
        else if(map.get(key)== 2) sum+= map.get(key)-1;
    }
    if(s.length>sum) return sum+1;
    return sum;
}

let nums = [0,1,2,3,4,5,6], k = 9;

var subarraySum = function(nums, k) {
      let sum = 0;
      let count = 0;
      let map = new Map();
      map.set(sum, 1);
      for(let i = 0; i < nums.length; i++) {
          sum += nums[i];
        if(map.has(sum-k)){
            
        }
      }
    return map;
};

console.log(subarraySum(nums, k));