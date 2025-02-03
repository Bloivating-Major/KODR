## 🚀 Week 13 - Day 1: **DSA - Happy Number & Hashing in JavaScript** 🧮🔢  

### **📌 What We Learned Today**
Today, we dived into **Hashing** and solved the **Happy Number** problem using **Set in JavaScript**. 💡  
✅ **Concept of Happy Numbers** 🎯  
✅ **Using Set for Cycle Detection** 🔄  
✅ **Mathematical Breakdown & Optimization** 🏆  

---

## **🧠 What is a Happy Number?**
A **Happy Number** is a number where:
1. We repeatedly replace the number with the sum of squares of its digits.
2. If it eventually becomes **1**, it's a **Happy Number** 😊.
3. If it enters a cycle and never reaches **1**, it's **not a Happy Number** 😞.

Example:  
🔹 **19 → (1² + 9²) = 82**  
🔹 **82 → (8² + 2²) = 68**  
🔹 **68 → (6² + 8²) = 100**  
🔹 **100 → (1² + 0² + 0²) = 1 🎉**  
✅ **19 is a Happy Number!**

---

## **📝 JavaScript Implementation**
We used a **Set** to detect cycles in the number transformation.  
```javascript
var isHappy = function (n) {
    let set = new Set();  // 🗂️ Store seen numbers to detect cycles
    let sum = 0, digit = 0;

    if (n == 7) return true;  // 🚀 Quick check for base case

    while (n !== 1 && !set.has(n)) {  // 🔄 Loop until 1 or cycle detected
        set.add(n);  // 🔖 Store the number
        sum = 0;

        while (n > 0) {  // 🔢 Sum of squares of digits
            digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;  // 🔄 Update n with the sum
    }

    return n == 1;  // ✅ If 1, it's happy, otherwise it's not
};
```

---

## **🔍 Complexity Analysis**
✅ **Time Complexity:** **O(log N)** (Each step reduces n by digits, similar to logarithmic behavior).  
✅ **Space Complexity:** **O(log N)** (Set stores a limited number of unique numbers).  

---

## **💡 Key Takeaways**
✔ **Hashing with Set** helps detect cycles efficiently. 🔄  
✔ **Mathematical Breakdown** optimizes the approach. 📏  
✔ **Edge Case Handling** (e.g., `n == 7` shortcut). 🚀  

---

## **🚀 Next Steps**
🔹 Solve **More Hashing-Based DSA Problems** 🔥  
🔹 Learn **Bit Manipulation for Efficient Computation** 🧠  

**Happy Coding! 🚀**