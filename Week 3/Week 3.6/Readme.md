
# **Interactive Stories with Progress Animation**

This document details the implementation of a **story feature** inspired by social media platforms. Users can view stories dynamically, with progress bar animations, timeouts, and responsive interaction handling.

---

## **📂 Features Overview**

| **Feature**                | **Description**                                                                 |
|-----------------------------|---------------------------------------------------------------------------------|
| **Dynamic Story Creation**  | Stories are dynamically created and displayed based on data.                   |
| **Story Modal Viewer**      | Clicking a story opens a modal to view it, along with details like username.    |
| **Progress Animation**      | A visual progress bar indicating the story's display duration.                 |
| **Timeout & Close Events**  | Stories auto-close after the duration or when the modal is clicked.            |

---

## **📝 Function Details**

### **1. Create Story**
- **Function Name**: `createStory()`
- **Objective**: Dynamically generate story thumbnails from the `storyData` array and add event listeners for interaction.
- **How It Works**:
  - Iterates through the `storyData` array to generate HTML for story thumbnails.
  - Adds `click` event listeners to each thumbnail to open the respective story in a modal.
  
#### **Code Snippet**:
```javascript
function createStory() {
  const storyContainer = document.querySelector(".stories");
  storyContainer.innerHTML = "";

  storyData.forEach((story, index) => {
    const storyHTML = `
        <div class="story-item">
            <div class="story-avatar">
                <img src="${story.userprofile}" alt="" id="${index}">
            </div>
            <span>${story.username}</span>
        </div>
        `;
    storyContainer.innerHTML += storyHTML;
  });

  const storyAvatars = document.querySelectorAll(".story-avatar img");
  storyAvatars.forEach((avatar) => {
    avatar.addEventListener("click", (e) => {
      const storyId = e.target.id;
      openStory(storyData[storyId]);
    });
  });
}
```

---

### **2. Open Story**
- **Function Name**: `openStory(story)`
- **Objective**: Display the selected story in a modal with a progress bar animation.
- **How It Works**:
  - Dynamically generates the modal content, including user details, story image, and a progress bar.
  - Starts a progress animation that fills the bar over a predefined duration (6 seconds).
  - Handles modal close events triggered by clicking outside the modal or pressing the close button.

#### **Key Features**:
- Progress animation logic:
  - Uses `setInterval` to incrementally update the width of the progress bar.
  - Automatically closes the story after the animation completes using `setTimeout`.
- Event listeners:
  - Click events to close the modal.
  - Prevent overlapping timers by clearing existing intervals and timeouts.

#### **Code Snippet**:
```javascript
function openStory(story) {
  if (currentStoryTimeout) {
    clearTimeout(currentStoryTimeout);
  }
  if (currentProgressAnimation) {
    clearInterval(currentProgressAnimation);
  }

  const modal = document.querySelector(".story-modal");
  modal.classList.add("active");

  const storyModal = `
        <div class="story-modal-header">
            <div class="story-user-info">
                <div class="story-avatar">
                    <img src="${story.userprofile}" alt="">
                </div>
                <span class="story-username">${story.username}</span>
                <span class="story-time">${story.timePosted}</span>
            </div>
            <div class="story-actions">
                <button class="close-btn"><i class="ri-close-line"></i></button>
            </div>
        </div>
        
        <div class="story-content">
            <div class="story-progress">
                <div class="progress-bar"></div>
            </div>
            
            <div class="story-media">
                <img src="${story.storyImage}" alt="">
            </div>
        </div>

        <div class="story-footer">
            <div class="reply-input">
                <input type="text" placeholder="Reply to ${story.username}...">
            </div>
            <div class="story-reactions">
                <button class="like-btn"><i class="ri-heart-line"></i></button>
                <button class="share-btn"><i class="ri-share-forward-line"></i></button>
            </div>
        </div>
    `;
  modal.innerHTML = storyModal;

  const progressBar = modal.querySelector(".progress-bar");
  let width = 0;
  const duration = 6000;
  const interval = 10;
  const increment = (interval / duration) * 100;

  currentProgressAnimation = setInterval(() => {
    if (width >= 100) {
      clearInterval(currentProgressAnimation);
      closeStory();
    } else {
      width += increment;
      progressBar.style.width = width + '%';
    }
  }, interval);

  currentStoryTimeout = setTimeout(() => {
    clearInterval(currentProgressAnimation);
    closeStory();
  }, duration);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      clearInterval(currentProgressAnimation);
      clearTimeout(currentStoryTimeout);
      closeStory();
    }
  });

  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    clearInterval(currentProgressAnimation);
    clearTimeout(currentStoryTimeout);
    closeStory();
  });
}
```

---

### **3. Close Story**
- **Function Name**: `closeStory()`
- **Objective**: Close the modal and clear any active animations or timeouts.

#### **Code Snippet**:
```javascript
function closeStory() {
  const modal = document.querySelector(".story-modal");
  const progressBar = modal.querySelector(".progress-bar");

  progressBar.style.animation = "none";

  modal.innerHTML = "";
  modal.classList.remove("active");
}
```

---

## **💡 Key Learnings**
1. **Dynamic DOM Manipulation**:
   - Generated story thumbnails and modals dynamically using data.
   - Used `innerHTML` to populate content efficiently.

2. **Progress Animation**:
   - Created a timed progress bar using `setInterval` and CSS styling.
   - Implemented seamless story transitions.

3. **Event Handling**:
   - Managed multiple events (click, timeout) for interactive modals.
   - Prevented conflicts by clearing existing intervals and timeouts.

4. **Responsive Design**:
   - Ensured the story modal adapts to various user interactions.

---

## **🚀 How to Use**
1. Include the provided JavaScript functions in your project.
2. Add the following HTML structure:
   - A container for story thumbnails (`.stories`).
   - A modal (`.story-modal`) for displaying stories.
3. Style the modal and progress bar using CSS for a polished UI.

---

This README highlights the functionality and logic behind your implementation, making it easy to understand and extend. Let me know if you'd like to include a CSS setup or additional refinements! 😊