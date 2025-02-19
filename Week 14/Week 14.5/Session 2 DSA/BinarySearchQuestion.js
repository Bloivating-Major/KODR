// let ans = LeetCode34();

function BinarySearch(nums, target, firstPosition){
    let ans = -1, first = 0, last = nums.length-1;

    while(first <= last){
        let mid = first + Math.floor((last-first)/2);
        
        if(nums[mid] == target){
            ans = mid;
            if(firstPosition) last = mid-1;
            else first = mid+1;
        }
        else if(nums[mid] > target) last = mid-1;
        else first = mid + 1;
    }
    return ans;

}

function LeetCode34(){
    let nums = [], target = 0
    let arr = new Array(2);
    arr[0] = BinarySearch(nums, target, true);
    arr[1] = BinarySearch(nums, target, false);
    return arr;
}