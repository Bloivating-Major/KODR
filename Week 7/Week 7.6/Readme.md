# **Revision Session: Strings in JavaScript**

## **Overview**
Today's session was dedicated to revising **string manipulation** techniques in JavaScript. We revisited key concepts such as traversing strings, iterating over characters, and reversing a string. Here's a summary of what we covered, with detailed explanations and code snippets.

---

## **What We Learned**

### **1. Traversing a String**
- **Objective**: Print each character of the string in the order it appears.
- **Concepts Covered**:
  - Using a `for` loop to iterate over a string.
  - Accessing individual characters with bracket notation (`string[index]`).

#### **Code Snippet**
```javascript
function Question1() {
  let string1 = "Hello World";
  for (let i = 0; i < string1.length; i++) {
    console.log(string1[i]);
  }
}
```

#### **Output**
```
H  
e  
l  
l  
o  
W  
o  
r  
l  
d  
```

---

### **2. Reversing a String**
- **Objective**: Print the characters of the string in reverse order.
- **Concepts Covered**:
  - Using a `for` loop to iterate over a string in reverse.
  - Accessing characters by decrementing the index.

#### **Code Snippet**
```javascript
function Question2() {
  let string1 = "Hello World";
  for (let i = string1.length - 1; i >= 0; i--) {
    console.log(string1[i] + " ");
  }
}
```

#### **Output**
```
d  
l  
r  
o  
W  
o  
l  
l  
e  
H  
```

---

## **Key Concepts**

1. **String Indexing**:  
   - Strings in JavaScript are zero-indexed, meaning the first character is at index `0`.
   - Use `string[index]` to access a specific character.

2. **String Length**:  
   - Use `string.length` to get the total number of characters in a string.

3. **Looping through Strings**:
   - Traverse from the start for regular order.
   - Traverse from the end for reverse order.

4. **Console Output**:
   - Use `console.log` to print each character during iteration.

---

## **Takeaways**
- **Traversing Strings**: Understand how to access each character in a string sequentially.
- **Reversing Strings**: Learn the logic to iterate over a string in reverse.
- **Iteration Mastery**: Strengthened looping skills by working with string indices.

---

## **Applications**
These fundamental string operations are building blocks for solving more complex problems, such as:
- **Palindrome Checks**: Determine if a string reads the same backward as forward.
- **Pattern Matching**: Analyze strings to find substrings or patterns.
- **Text Manipulation**: Modify or process strings for various use cases.

---

💡 **Pro Tip**: Practice iterating through strings with different loops (`for`, `while`, `forEach`) to deepen your understanding of iteration patterns.

---

Happy Revising! 🚀