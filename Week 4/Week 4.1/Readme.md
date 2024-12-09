
---

# **JavaScript Learning Sessions - Summary**

This document highlights the two learning sessions conducted on the same day. The first session focused on solving **JavaScript logic-building questions**, while the second session delved into **JavaScript DOM interactions** to enhance front-end development skills.

---

## **📂 Session 1: Logic-Building Questions**

In this session, we tackled 10 JavaScript problems categorized into **Basic**, **Intermediate**, and **Advanced** levels. The questions helped improve problem-solving skills and apply JavaScript concepts effectively.

### **Problems and Solutions Overview**

| **Level**         | **Question**                                | **Description**                                 |
|--------------------|--------------------------------------------|------------------------------------------------|
| **Basic**         | Reverse a String                           | Reverse a given string using JavaScript.       |
|                   | Check for Palindrome                       | Determine if a string is a palindrome.         |
|                   | FizzBuzz                                   | Print numbers with rules for multiples of 3/5. |
|                   | Find Largest in an Array                   | Return the largest number in an array.         |
| **Intermediate**  | Remove Duplicates                          | Remove duplicate values from an array.         |
|                   | Sum of Digits                              | Calculate the sum of digits in a number.       |
|                   | Anagram Check                              | Check if two strings are anagrams.             |
|                   | Count Vowels                               | Count the number of vowels in a string.        |
| **Advanced**      | Two Sum                                    | Find indices of two numbers that sum to target.|
|                   | Flatten a Nested Array                     | Flatten deeply nested arrays into a single array.|

### **Key Learnings**
1. **String Manipulations**:
   - Reversing strings and checking for palindromes.
   - Sorting strings for anagram comparisons.
2. **Array Manipulations**:
   - Removing duplicates using `Set`.
   - Flattening nested arrays using `flat(Infinity)`.
3. **Control Structures**:
   - Looping constructs (`for`, `reduce`) for sum and iteration.
4. **Problem-Solving Techniques**:
   - Used hash maps for efficient lookups in the Two Sum problem.
   - Applied modular logic for reusable functions.

### **Code Repository**
Organized into folders for easy access:
```plaintext
LogicQuestions/
├── basic/
├── intermediate/
├── advanced/
└── README.md
```

---

## **📂 Session 2: JavaScript DOM Interactions**

In the second session, we explored **JavaScript DOM Manipulation** with a project to create interactive and dynamic web sections. The features included hover effects, video displays, and progress animations.

### **Features Implemented**
1. **Dynamic Background Colors**:
   - Applied section-specific colors dynamically using `sectionColors` mapping.
   - Styled mobile and desktop views differently.

2. **Hover Effects**:
   - Changed the background color, displayed videos, and adjusted padding on hover.
   - Used `mouseover` and `mouseleave` events for interactivity.

3. **Video Positioning**:
   - Animated video containers horizontally in response to mouse movement.
   - Implemented smooth animations using the **GSAP** library.

### **Key Learnings**
1. **DOM Manipulation**:
   - Accessed and modified DOM elements dynamically using `querySelector` and `style`.
2. **Event Handling**:
   - Mastered `mouseover`, `mouseleave`, and `mousemove` for user interactions.
3. **Animations**:
   - Leveraged GSAP for creating fluid animations with precise control.
4. **Responsive Design**:
   - Designed features for both mobile and desktop views.

### **Code Snippet**
Dynamic video positioning using mouse movements:
```javascript
section.addEventListener("mousemove", (e) => {
  let videoContainer = section.querySelector("#videosContent");
  let cardWidth = videoContainer.getBoundingClientRect().width;
  let xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    cardWidth,
    window.innerWidth - cardWidth,
    e.clientX
  );
  gsap.to("#videosContent", {
    left: xVal + "px",
    ease: Power2,
  });
});
```

---

## **🚀 How to Run**
1. Clone the project repository.
2. Navigate to respective folders for logic-building questions and DOM interactions.
3. Run the code in a browser or JavaScript environment:
   - For **Logic Questions**: Execute in Node.js or browser console.
   - For **DOM Interactions**: Open the `index.html` file in a browser.

---

## **📂 Folder Structure**

```plaintext
JavaScriptLearning/
├── LogicQuestions/
│   ├── basic/
│   ├── intermediate/
│   ├── advanced/
│   └── README.md
├── DOMInteractions/
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   └── README.md
```

---

## **🌟 Highlights**
1. **Comprehensive Learning**:
   - Combined fundamental algorithmic problem-solving with advanced DOM manipulation.
2. **Hands-On Implementation**:
   - Real-world examples for interactive UI components.
3. **Reusable Concepts**:
   - Modular code suitable for extensions in larger projects.

---

This README serves as a summary of the day’s sessions, consolidating both logic-building and interactive DOM concepts.