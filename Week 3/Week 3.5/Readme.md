
# **Interactive Post Features: Like and Double-Tap Animation**

This document highlights the implementation of **like post interactions** and **double-click animations** for a social media-style web application. These features enhance user engagement by providing interactive and visual feedback.

---

## **📂 Features Overview**

| **Feature**            | **Description**                                   | **Key Concepts**                  |
|-------------------------|---------------------------------------------------|------------------------------------|
| **Like Post Button**    | Allows users to like/unlike posts via a button.   | Event Listeners, State Management |
| **Double-Tap Like**     | Enables double-click to like a post with animation.| DOM Manipulation, CSS Animations  |

---

## **📝 Function Details**

### **1. Like Post Button**
- **Function Name**: `likePost()`
- **Objective**: Toggle the like state of a post when the like button is clicked.
- **How It Works**:
  - Adds click event listeners to all elements with the `#like` ID.
  - Retrieves the post index from the button's `id`.
  - Toggles the `like` state in the `userData` array:
    - Increases or decreases the like count accordingly.
  - Calls the `createPost()` function to update the DOM dynamically.

#### **Code Snippet**:
```javascript
function likePost() {
  const likeBtn = document.querySelectorAll("#like");
  likeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let index = e.target.id;
      if (userData[index].like) {
        userData[index].like = false;
        userData[index].likeCount--;
      } else {
        userData[index].like = true;
        userData[index].likeCount++;
      }
      createPost();
    });
  });
}
```

#### **Key Concepts**:
- **Event Listeners**: Used `addEventListener` to handle button clicks.
- **State Management**: Updated the `like` state and count in the `userData` array.
- **DOM Updates**: Triggered UI changes by calling `createPost()`.

---

### **2. Double-Tap to Like**
- **Function Name**: `setupDoubleClickLike()`
- **Objective**: Enable double-tap to like posts with a heart animation.
- **How It Works**:
  - Adds double-click event listeners to elements with the `post-image` class.
  - Retrieves the post index from the `data-index` attribute.
  - Toggles the `like` state and increments the like count if not already liked.
  - Animates a heart overlay on double-click using CSS transitions.

#### **Code Snippet**:
```javascript
function setupDoubleClickLike() {
  const postImages = document.querySelectorAll('.post-image');
  
  postImages.forEach(post => {
    post.addEventListener('dblclick', (e) => {
      e.preventDefault();
      const index = e.currentTarget.dataset.index;
      const heartAnimation = post.querySelector('.heart-animation');
      
      heartAnimation.classList.add('active');
      setTimeout(() => {
        heartAnimation.classList.remove('active');
      }, 1000);

      if (!userData[index].like) {
        userData[index].like = true;
        userData[index].likeCount++;
        
        const heartIcon = document.querySelectorAll('.icon-heart')[index];
        heartIcon.classList.remove('ri-heart-line');
        heartIcon.classList.add('ri-heart-fill');
        const likeCount = heartIcon.nextElementSibling;
        likeCount.textContent = userData[index].likeCount;
      }
    });
  });
}
```

#### **Key Concepts**:
- **Event Listeners**: Listened for `dblclick` events on post images.
- **CSS Animations**: Triggered animations for the heart icon on double-tap.
- **Dynamic DOM Updates**:
  - Changed the like icon's appearance.
  - Updated the like count displayed next to the icon.

---

## **💡 Key Learnings**
1. **Event Handling**:
   - Leveraged both `click` and `dblclick` events for enhanced interactivity.
2. **Dynamic DOM Manipulation**:
   - Updated DOM elements dynamically to reflect state changes (like count and icons).
3. **CSS Animations Integration**:
   - Incorporated animations for a visually appealing user experience.
4. **State Management**:
   - Managed the like state and count in the `userData` array for consistency.

---

## **📂 Folder Structure**

```plaintext
InteractivePosts/
├── index.html
├── style.css
├── main.js
├── README.md
```

---

## **🚀 How to Use**
1. Add the provided JavaScript functions to your project.
2. Ensure the following elements are present in the HTML structure:
   - `#like` buttons for the like functionality.
   - `post-image` elements for double-tap likes.
   - `heart-animation` class for the heart overlay animation.
3. Include the CSS animations for `heart-animation` to visualize the double-tap feature.

---

Feel free to enhance this further or integrate it into your projects. Let me know if you need more help! 😊