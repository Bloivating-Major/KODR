
---

# **Dynamic Section Interactions with JavaScript**

This project demonstrates how to create interactive and responsive sections using **JavaScript**, enhancing user experience with dynamic visual effects. The features include hover effects, color changes, video display toggling, and responsive animations. It integrates modern JavaScript concepts for efficient and visually appealing designs.

---

## **📂 Features and Concepts**

### **1. Dynamic Section Background Colors**
- **What It Does**:
  - Changes the background color of sections dynamically based on their IDs.
  - Mobile view sections are styled on page load, while desktop sections respond to hover events.
  
- **Key Concepts**:
  - **Data Mapping**: Utilized an object `sectionColors` to map section IDs to their respective background colors.
  - **DOM Manipulation**: Applied styles dynamically using `element.style.backgroundColor`.

#### Code Snippet:
```javascript
const sectionColors = {
  section1: "#4A576B",
  section2: "#005337",
  section3: "#5355EE",
  section4: "#FB523B",
  section5: "#5355EE",
  section6: "#1626F3",
  section7: "#636301",
  section8: "#51249D",
};

mobileSection.forEach((mobsec) => {
  const id = mobsec.id;
  const bgColor = sectionColors[id];
  mobsec.style.backgroundColor = bgColor;
});
```

---

### **2. Hover Effects on Desktop Sections**
- **What It Does**:
  - On hovering over a section:
    - Changes the background color.
    - Displays a hidden video.
    - Fades in a link element.
    - Adjusts padding for visual emphasis.
  - Reverts all changes when the mouse leaves the section.

- **Key Concepts**:
  - **Event Listeners**:
    - `mouseover` for handling hover interactions.
    - `mouseleave` for resetting styles.
  - **CSS Styling via JavaScript**:
    - Dynamically updates styles like `backgroundColor`, `display`, `opacity`, and `padding`.

#### Code Snippet:
```javascript
section.addEventListener("mouseover", () => {
  const hoverColor = sectionColors[section.id];
  section.style.backgroundColor = hoverColor;
  section.querySelector("#videosContent").style.display = "block";
  section.querySelector("#showCase").style.opacity = "1";
  section.style.padding = "2.5em 3em";
});

section.addEventListener("mouseleave", () => {
  section.style.backgroundColor = defaultBgColor;
  section.querySelector("#videosContent").style.display = "none";
  section.querySelector("#showCase").style.opacity = "0";
  section.style.padding = "1em 3em";
});
```

---

### **3. Responsive Video Positioning**
- **What It Does**:
  - Moves a video container horizontally based on mouse movements within a section.
  - Ensures a smooth animation effect using the **GSAP (GreenSock Animation Platform)** library.

- **Key Concepts**:
  - **Mouse Events**:
    - `mousemove` to track the cursor's position.
  - **Mapping Values**:
    - Used `gsap.utils.mapRange` to map the cursor’s X position to the video's horizontal range.
  - **GSAP Animation**:
    - Applied `gsap.to` for smooth transitions.

#### Code Snippet:
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

## **🛠️ Technologies and Concepts Used**

1. **JavaScript Fundamentals**:
   - Object mapping for associating section IDs with colors.
   - Event-driven programming with `addEventListener`.
   - DOM querying and manipulation using `querySelector` and `style`.

2. **Modern Libraries**:
   - **GSAP**:
     - Used for smooth animations and transitions.
     - Functions like `gsap.utils.mapRange` and `gsap.to` ensure precision and fluidity.

3. **Responsive Design**:
   - Differentiated behaviors for mobile (`mobileSection`) and desktop (`sections`).

4. **Code Efficiency**:
   - Reusable logic for event handling and animation.
   - Modular design with separate functions for hover, leave, and move events.

---

## **💡 Key Learnings**

1. **Dynamic Styling**:
   - Learned how to apply and toggle CSS styles programmatically.

2. **Event Handling**:
   - Utilized multiple event types (`mouseover`, `mouseleave`, `mousemove`) to create interactive elements.

3. **Animation Basics**:
   - Integrated GSAP for visually appealing and smooth animations.

4. **Responsive Interactions**:
   - Designed features that adapt to different screen sizes and user behaviors.

---

## **🚀 How to Run**

1. Include this JavaScript file in your HTML project.
2. Ensure the following structure for your HTML elements:
   - Desktop and mobile sections with unique IDs matching `sectionColors`.
   - Child elements like `#videosContent` (for videos) and `#showCase` (for links) within each section.
3. Link GSAP in your project:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
   ```
4. Open the project in a browser to experience the dynamic interactions.

---

