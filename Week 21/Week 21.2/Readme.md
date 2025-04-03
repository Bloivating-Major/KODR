
# 🚀 **Week 21 | Day 2 | DSA Session - LeetCode Questions**  

> **"Backtracking & Recursion - Unleashing the Power of Choices! 🔥"**  

💡 **Today's Focus:** Tackling backtracking problems where we generate unique subsets and solve the classic **Letter Combinations of a Phone Number** problem.  

---

## 📌 **Problems Solved**  

### 🔹 **1️⃣ Subsets II (Handling Duplicates)**
🔹 **Concept:** Generate all unique subsets from a given array.  
🔹 **Challenge:** Handle duplicate elements to avoid redundant subsets.  

#### 🛠 **Approach:**
1️⃣ **Sort the array** to bring duplicates together.  
2️⃣ **Pick or Skip:**  
   - **Include** the element and move forward.  
   - **Exclude** and **skip** duplicate values.  
3️⃣ **Use recursion** to explore all possibilities.  

✅ **Key Learning:** Sorting + avoiding duplicate picks = Unique subsets!  

```javascript
var solve = function (nums, i, ans, cur){
    if(i === nums.length){
        ans.push([...cur]);
        return;
    }
    // pick
    cur.push(nums[i]);
    solve(nums, i+1, ans, cur);
    cur.pop();
    // skip duplicates
    while(i+1 < nums.length && nums[i] === nums[i+1]) i++;
    solve(nums, i+1, ans, cur);
}

var subsetsWithDup = function(nums) {
    nums.sort();
    let ans = [];
    let cur = [];
    solve(nums, 0 , ans, cur);
    return ans;
};
```

✅ **Edge Cases Considered:**  
✔️ Arrays with all unique values.  
✔️ Arrays with multiple duplicates.  
✔️ Empty array case.  

---

### 🔹 **2️⃣ Letter Combinations of a Phone Number**  
🔹 **Concept:** Given a string of digits, generate all possible letter combinations based on a mobile keypad.  

#### 🛠 **Approach:**  
1️⃣ **Use a map** to store digit-letter mappings (just like an old-school keypad! 📱).  
2️⃣ **Recursively generate** all possible letter combinations.  
3️⃣ **Iterate over each digit’s mapped letters**, forming new strings at each step.  

✅ **Key Learning:** **DFS-style recursion efficiently explores all possibilities!**  

```javascript
var solve = function(dig, i, cur, ans, map){
    if(i === dig.length){
        if(cur.length > 0) ans.push(cur);
        return;
    }

    // Get the possible letters for the current digit
    let s = map.get(dig.charAt(i));
    for(let j = 0; j < s.length; j++){
        solve(dig, i+1, cur + s.charAt(j), ans, map);
    }
}

var letterCombinations = function(digits) {
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
```

✅ **Edge Cases Considered:**  
✔️ Empty input (`""`).  
✔️ Single-digit input.  
✔️ Input with multiple digits (`"23" → ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]`).  

---

## 🎯 **Key Takeaways from Today's Session**  
✅ **Backtracking is all about making and undoing choices carefully!**  
✅ **Sorting first in Subset-II helps in handling duplicates efficiently.**  
✅ **Letter Combinations is a classic recursion & mapping problem.**  
✅ **Practice makes recursion intuitive!**  

---

## 🚀 **Next Steps**  
🔸 Solve **N-Queens** to level up backtracking!  
🔸 Explore **Combination Sum** problems for deeper recursion practice.  
🔸 Try implementing these in **TypeScript** for strong typing benefits.  

---

💭 **"Recursion is like magic—once you get it, you can solve anything!" 🪄🔥**  

---

How’s this? Let me know if you want any tweaks! 🚀🔥