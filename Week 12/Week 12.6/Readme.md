## 🚀 Week 12 - Day 6: **DSA - Moore's Voting Algorithm** 🎯  

### **🔍 What We Learned Today**
Today, we explored the **Moore's Voting Algorithm**, a highly efficient algorithm used to find the **majority element** in an array. The majority element is the one that appears more than `n/2` times in an array of size `n`. 

---

## **💡 Moore’s Voting Algorithm - Explanation**
The algorithm follows a **two-step process** to determine the majority element:

1️⃣ **Candidate Selection Phase:**  
   - We assume the first element as the majority candidate (`ans`).  
   - We maintain a `count`, which increases when the current element is the same as `ans` and decreases when it's different.  
   - If `count` becomes `0`, we pick the next element as a new candidate.

2️⃣ **Verification Phase (Optional):**  
   - To **ensure correctness**, traverse the array again to confirm whether the candidate appears more than `n/2` times.

⏳ **Time Complexity:** `O(n)`  
📦 **Space Complexity:** `O(1)`

---

## **📌 Implementation - Moore’s Voting Algorithm**
```javascript
var majorityElement = function(nums) {
    let ans = nums[0];
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(count == 0){
            ans = nums[i];
            count = 1;
        } else if(nums[i] !== ans) {
            count--;
        } else {
            count++;
        }
    }
    return ans;
};

// Test Cases
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
```

---

## **🔬 Dry Run Example**
Consider the input:  
`nums = [2, 2, 1, 1, 1, 2, 2]`

| **Step** | **Element** | **Candidate (`ans`)** | **Count** |
|----------|------------|--------------------|----------|
| 1️⃣  | `2` | `2` | `1` |
| 2️⃣  | `2` | `2` | `2` |
| 3️⃣  | `1` | `2` | `1` |
| 4️⃣  | `1` | `2` | `0` (Reset candidate) |
| 5️⃣  | `1` | `1` | `1` |
| 6️⃣  | `2` | `1` | `0` (Reset candidate) |
| 7️⃣  | `2` | `2` | `1` |

✅ The final majority element is **`2`**.

---

## **🎯 Why is Moore’s Voting Algorithm Efficient?**
✔ **Linear Time Complexity (`O(n)`)** – Only a single pass through the array is needed.  
✔ **Constant Space Complexity (`O(1)`)** – No extra storage is required.  
✔ **Mathematically Proven** – Works under the assumption that a majority element always exists.  

---

## **🚀 Key Takeaways**
✅ **Moore’s Voting Algorithm** helps find the majority element efficiently.  
✅ Uses **counting and elimination strategy** instead of sorting or hashing.  
✅ Works only if **a majority element is guaranteed to exist** (appearing more than `n/2` times).  
✅ **For verification**, a second pass is needed to confirm the majority count.  

---

## **📝 Next Steps**
🔹 Modify the algorithm to handle cases where a majority element **may not exist**.  
🔹 Solve variations like **"Find elements appearing more than `n/3` times"** using extended versions of this approach.  

📌 **Challenge:** Can you modify this algorithm to find elements appearing more than `n/3` times? 🤔  

💡 **Happy Coding! 🚀🔥**