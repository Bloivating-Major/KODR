Here’s a **beautiful README** summarizing what you learned in **Session 2**:

---

# **Session 2: String Manipulations and Array Operations in JavaScript**

In this session, we explored various **string manipulation techniques** and worked with **arrays** to solve interesting problems and implement practical solutions. Here's a detailed overview:

---

## **Topics Covered**

### 1. **Case Conversion for Strings**
We created a program to toggle the case of each character in a string while keeping spaces and special characters unchanged.

#### **Code Snippet**
```javascript
let s = "HELLO world";
let t = '';

for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
        // Uppercase to lowercase
        t += String.fromCharCode(s[i].charCodeAt() + 32);
    } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
        // Lowercase to uppercase
        t += String.fromCharCode(s[i].charCodeAt() - 32);
    } else {
        // Retain spaces and special characters
        t += s[i];
    }
}
console.log(t);
```
**Output**:  
`hello WORLD`

---

### 2. **Finding Words Starting with a Specific Prefix**
We learned how to filter an array of words to find those that start with a specific prefix using `startsWith`.

#### **Code Snippet**
```javascript
let words = ["pay", "attire", "practice", "attend"];
let pref = 'at';
let ans = [];

words.forEach((word) => {
    if (word.startsWith(pref)) {
        ans.push(word);
    }
});

let result = "Words starting with pref = " + ans.join(", ");
console.log(result);
```
**Output**:  
`Words starting with pref = attire, attend`

---

### 3. **Capitalizing the First Letter of Each Word**
We explored how to split a sentence into words, capitalize the first letter of each word, and print them.

#### **Code Snippet**
```javascript
let arr = "Hello bhai kya hal chal";
let splitedArr = arr.split(" ");

for (let i = 0; i < splitedArr.length; i++) {
    console.log(splitedArr[i].charAt(0).toUpperCase() + splitedArr[i].substring(1));
}
```
**Output**:  
```
Hello  
Bhai  
Kya  
Hal  
Chal  
```

---

### 4. **String Manipulation Methods**
We covered various JavaScript string methods to perform operations like converting to lowercase/uppercase, trimming, replacing, splitting, etc.

#### **Methods and Examples**
```javascript
let s = " hello bhai%hello hello hello";
console.log(s.toLowerCase());          // Convert to lowercase
console.log(s.toUpperCase());          // Convert to uppercase
console.log(s.concat(" coding"));      // Concatenate with another string
console.log(s.endsWith("s"));          // Check if ends with 's'
console.log(s.startsWith("ans"));      // Check if starts with 'ans'
console.log(s.includes("bhai"));       // Check if includes 'bhai'
console.log(s.substring(3, 5));        // Extract substring
console.log(s.replaceAll("hello", "hey")); // Replace all occurrences of 'hello'
console.log(s.split("%"));             // Split string at '%'
console.log(s.length);                 // Length of the string
console.log(s.trimEnd());              // Trim trailing spaces
```

---

### **Highlights**
1. **Case Conversion**: Transform uppercase letters to lowercase and vice versa.
2. **Prefix Search**: Use `startsWith` to find words starting with a specific prefix.
3. **Word Capitalization**: Utilize `split`, `charAt`, and `toUpperCase` for formatting text.
4. **String Operations**: Apply string methods like `concat`, `substring`, `replaceAll`, and `split` for versatile string manipulation.

---

**This session provided a solid foundation for handling strings and arrays effectively in JavaScript.**