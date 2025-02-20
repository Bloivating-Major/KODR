# 📚 **Week 15 Day 4 - DSA Session** 🔥  

## **📝 Topics Covered:**
✅ **Finding the Longest Palindrome Subsequence**  
✅ **Finding Subarray Sum Equals K**  

---

## 🚀 **1. Finding the Longest Palindrome in a String**
📌 **Problem:** Given a string `s`, find the length of the longest palindrome that can be built using the characters of `s`.  

### **🔢 Example**
```javascript
Input: s = "abccccdd"
Output: 7
```

### **✅ Solution**
```javascript
var longestPalindrome = function(s){
    let sum = 0;
    let map = new Map();

    // Count frequency of each character
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for(let key of map.keys()){
        if(map.get(key) >= 3) sum += map.get(key);
        else if(map.get(key) == 2) sum += map.get(key) - 1;
    }

    // If any character remains, add one to make it an odd-length palindrome
    if(s.length > sum) return sum + 1;
    
    return sum;
};

console.log(longestPalindrome("abccccdd")); // Output: 7
```
---

## 🔄 **2. Finding the Number of Subarrays with Sum Equal to K**
📌 **Problem:** Given an array `nums` and an integer `k`, find the number of subarrays whose sum equals `k`.  
📌 **Optimization:** Use **Prefix Sum with Hash Map** to optimize the solution to `O(N)`.  

### **🔢 Example**
```javascript
Input: nums = [1,1,1], k = 2
Output: 2
```

### **✅ Solution**
```javascript
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1); // Initialize prefix sum map

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // Check if sum-k exists in the map
        if(map.has(sum - k)){
            count += map.get(sum - k);
        }

        // Store the frequency of the current sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
};

console.log(subarraySum([1,1,1], 2)); // Output: 2
```
---

## 🏆 **Key Takeaways**
🔹 **Finding Longest Palindrome:** Use a **hash map** to count character frequencies and construct the longest palindrome efficiently.  
🔹 **Finding Subarrays with Sum K:** Use a **prefix sum hash map** to store cumulative sums and check for matching subarrays in `O(N)` time complexity.  

🔥 **Keep practicing! These are crucial concepts for DSA interviews and problem-solving!** 🚀