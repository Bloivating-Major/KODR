# **JavaScript DOM Manipulation - Task Highlights**

This repository showcases projects that utilize **JavaScript DOM Manipulation** to create interactive web applications. Each task demonstrates event handling, dynamic content creation, and responsive user interfaces.

---

## **📂 Task Overview**

| **Task**                           | **Description**                              |
|------------------------------------|---------------------------------------------|
| **Task 1: Download Progress Bar**  | A dynamic progress bar simulating downloads. |
| **Task 2: Social Media Post Feed** | Interactive social media post feed with stories. |

---

## **📝 Task Details**

### **Task 1: Download Progress Bar**
- **Objective**: Simulate a download process with a dynamic progress bar that updates in real time.  
- **Key Features**:
  - Progress increases dynamically until it reaches 100%.
  - Displays a reset button to start over after completion.
  - Randomized progress interval for a realistic feel.
- **Key JavaScript Concepts**:
  - **Event Listeners**: Handling `click` events for download and reset buttons.
  - **setInterval**: For updating the progress bar periodically.
  - **DOM Manipulation**: Dynamically updating the `width` of the progress bar and button states.

---

### **Task 2: Social Media Post Feed**
- **Objective**: Create a social media feed with posts and interactive stories.  
- **Key Features**:
  - **Post Feed**: Displays user profiles, posts, captions, and actions (like, comment, share).
  - **Stories**:
    - Circular avatars representing user stories.
    - Clickable stories that open in a modal with a progress animation.
    - Close functionality for the story modal.
  - Dynamic updates based on user data.

- **Key JavaScript Concepts**:
  - **Dynamic Content Creation**: Using `innerHTML` to inject post and story templates.
  - **Event Handling**: Adding click events to story avatars to display stories.
  - **Animation Control**: Progress bar animations for story timing.
  - **Reusability**: Functions like `createPost` and `createStory` for modular design.

---

## **🚀 How It Works**

### **Task 1: Download Progress Bar**
1. Click the **Download** button to start the progress bar.
2. Watch the bar fill up dynamically with progress percentage displayed.
3. Once complete, the button updates to "Downloaded," and the **Reset** button appears to restart.

### **Task 2: Social Media Post Feed**
1. Posts are dynamically loaded with user data (profile, post image, likes, comments, and caption).
2. Stories are shown as circular avatars; clicking a story opens it in a modal.
3. The modal displays the user’s story, with a timed progress bar animation.
4. Stories can be closed manually or automatically after the animation ends.

---

## **🛠️ How to Run**
1. Copy the code into your project folder.
2. Include the **HTML**, **CSS**, and **JavaScript** files.
3. Open the **HTML file** in your browser to view the application.

---

## **💡 Key Learnings**
1. **Dynamic DOM Manipulation**:
   - Creating and injecting HTML structures dynamically based on data.
   - Modifying styles and attributes programmatically.
2. **Event Handling**:
   - Listening to and responding to user actions like button clicks and avatar selections.
3. **Animations and Timers**:
   - Using `setInterval` for periodic updates.
   - Controlling CSS animations dynamically through JavaScript.

---

Feel free to explore and enhance these tasks for your projects. Let me know if you'd like further improvements or live demo links added! 😊
