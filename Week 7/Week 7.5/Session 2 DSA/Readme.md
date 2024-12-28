# **JavaScript Practice: Character Frequency and Anagram Check**

Today's session focused on understanding character frequency in strings and efficiently checking if two strings are anagrams. Below is a detailed summary of the concepts covered and the code implementations.

---

## **Topics Covered**

### **1. Checking Character Frequency in a String**
- Used an array to track the frequency of each character in a string.
- Applied ASCII values to calculate the index for each character in the frequency array.
- Example: For string `"hello"`, the frequency of each character is computed and displayed.

#### **Code Explanation**
```javascript
let s = "hello";
let arr = new Array(26).fill(0); // Create an array to store frequencies of 26 lowercase alphabets

for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i); // Get ASCII value of the character
    arr[ascii - 97]++; // Increment the frequency at the index corresponding to the character
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { // If frequency is greater than 0, display the character and its frequency
        console.log(String.fromCharCode(i + 97) + " = " + arr[i]);
    }
}
```

**Output**:  
```
h = 1  
e = 1  
l = 2  
o = 1  
```

---

### **2. Checking if Two Strings are Anagrams**

#### **Inefficient Approach**
- Used two frequency arrays, one for each string.
- Compared the frequencies of both strings to determine if they are anagrams.

**Code Explanation**
```javascript
let s1 = "hello";
let s2 = "lleoh";

let arr1 = new Array(26).fill(0);
let arr2 = new Array(26).fill(0);

if (s1.length != s2.length) console.log("False");
else {
    for (let i = 0; i < s1.length; i++) {
        arr1[s1.charCodeAt(i) - 97]++;
        arr2[s2.charCodeAt(i) - 97]++;
    }
    let isAnagram = true;
    for (let i = 0; i < 26; i++) {
        if (arr1[i] != arr2[i]) {
            isAnagram = false;
            break;
        }
    }
    if (isAnagram) console.log("True");
    else console.log("False");
}
```

---

#### **Efficient Approach**
- Used a single frequency array to track character counts from both strings.
- Incremented the count for characters in the first string and decremented for characters in the second string.
- Checked if all counts were zero to determine if the strings are anagrams.

**Code Explanation**
```javascript
let s1 = "hello";
let s2 = "lleoh";

let arr = new Array(26).fill(0);

if (s1.length != s2.length) console.log("False");
else {
    for (let i = 0; i < s1.length; i++) {
        arr[s1.charCodeAt(i) - 97]++;
        arr[s2.charCodeAt(i) - 97]--;
    }
    let isAnagram = true;
    for (let i = 0; i < 26; i++) {
        if (arr[i] != 0) {
            isAnagram = false;
            break;
        }
    }
    if (isAnagram) console.log("True");
    else console.log("False");
}
```

**Output**:  
```
True
```

---

## **Key Learnings**
1. **Character Frequency Using Arrays**:
   - Efficiently tracked character counts using ASCII values.
   - Simplified operations with fixed-size arrays for lowercase alphabets.

2. **Anagram Check**:
   - Explored two approaches:
     - **Inefficient**: Used two separate arrays to track frequencies.
     - **Efficient**: Utilized a single array to optimize space and time complexity.

3. **ASCII Manipulation**:
   - Leveraged `charCodeAt` and `String.fromCharCode` for ASCII-based operations.

---

## **Takeaways**
- Efficient data structures like arrays can significantly optimize string operations.
- Understanding ASCII values is crucial for character-level manipulations.
- Always consider edge cases, such as strings of unequal lengths or empty strings, when designing solutions.

---

Happy Coding! 🚀