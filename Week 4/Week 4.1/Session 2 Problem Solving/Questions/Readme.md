
---

# **JavaScript Logic Building Questions**

This repository contains solutions to 10 fundamental JavaScript logic-building questions, categorized into **Basic**, **Intermediate**, and **Advanced** levels. These problems enhance problem-solving skills and strengthen programming fundamentals.

---

## **📂 Questions and Solutions**

### **Basic Level**

#### **1. Reverse a String**
**Problem**: Write a function to reverse a given string.  
**Solution**:
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"
```

---

#### **2. Check for Palindrome**
**Problem**: Check if a string is a palindrome.  
**Solution**:
```javascript
function isPalindrome(str){
    let lower = str.toLowerCase()
    let final = lower.split('').reverse().join('');
    if(final === lower){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome('Madam')); // true
```

---

#### **3. FizzBuzz**
**Problem**: Print numbers from 1 to 100 with the following rules:  
- Multiples of 3 → "Fizz"
- Multiples of 5 → "Buzz"
- Multiples of both → "FizzBuzz"  
**Solution**:
```javascript
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
      (i%3===0 && i%5===0) ? console.log('FizzBuzz') : i%3 === 0 ? console.log('Fizz') : i%5 === 0 ? console.log('Buzz') : console.log(i);
    }
}
fizzBuzz();
```

---

#### **4. Find the Largest Number in an Array**
**Problem**: Return the largest number in an array.  
**Solution**:
```javascript
function findLargest(arr) {
    let max = arr[0];
    arr.forEach(element => {
        if(element > max){
            max = element;
        }
    });
    return max;
}
console.log(findLargest([1,2,37,99,4,5]));
```

---

### **Intermediate Level**

#### **5. Remove Duplicates from an Array**
**Problem**: Remove duplicate values from an array.  
**Solution**:
```javascript
function removeDuplicates(arr) {
    if (arr.length === 0) return [];

    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,3, 5, 6, 4]));
```

---

#### **6. Sum of Digits**
**Problem**: Return the sum of the digits of a number.  
**Solution**:
```javascript
function sumOfDigits(num) {
    let sum = 0;
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum);
}
sumOfDigits(1234);
```

---

#### **7. Anagram Check**
**Problem**: Check if two strings are anagrams.  
**Solution**:
```javascript
function isAnagram(str1, str2) {
    if(str1.length === str2.length){
        const Anagram = str => str.toLowerCase().split('').sort().join('');
        return Anagram(str1) === Anagram(str2);
    }
    return false;
}
console.log(isAnagram('listen', 'silent')); // true
```

---

#### **8. Count Vowels**
**Problem**: Count the number of vowels in a string.  
**Solution**:
```javascript
function countVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = string.toLowerCase().split('');

    let filteredVowels = arr.filter((e)=>{
        return vowels.includes(e)
    })
    console.log(filteredVowels.length);
}

countVowels('Hello World');
```

---

### **Advanced Level**

#### **9. Two Sum Problem**
**Problem**: Find indices of two numbers that add up to a target.  
**Solution**:
```javascript
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
```

---

#### **10. Flatten a Nested Array**
**Problem**: Flatten a deeply nested array into a single array.  
**Solution**:
```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
```

---

## **🚀 How to Run**
1. Copy the desired code snippet into a JavaScript file or console.
2. Run the file in Node.js or any modern browser.
3. Modify the inputs to test different scenarios.

---

## **💡 Key Learnings**
1. **String Manipulations**:
   - Using `split()`, `reverse()`, and `join()` for reversing strings.
   - Sorting strings for anagram checks.
2. **Array Manipulations**:
   - Removing duplicates using `Set`.
   - Flattening nested arrays with `flat(Infinity)`.
3. **Mathematical Logic**:
   - Summing digits using `reduce`.
   - Finding indices with hash maps for efficient lookups.
4. **Iterative Patterns**:
   - Solved iterative problems like FizzBuzz and vowel counting.
5. **Problem-Solving Strategies**:
   - Efficient approaches for common coding challenges.

---

## **📂 Folder Structure**
```plaintext
LogicQuestions/
├── basic/
│   ├── reverseString.js
│   ├── palindromeCheck.js
│   ├── fizzBuzz.js
│   ├── largestInArray.js
├── intermediate/
│   ├── removeDuplicates.js
│   ├── sumOfDigits.js
│   ├── anagramCheck.js
│   ├── countVowels.js
├── advanced/
│   ├── twoSum.js
│   ├── flattenArray.js
└── README.md
```

---

This README is structured to provide clarity and immediate understanding of the solutions and concepts used.