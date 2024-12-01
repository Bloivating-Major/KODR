const storyData = [
  {
    username: "travel_diaries",
    userprofile: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timePosted: "2h",
    hasStory: true
  },
  {
    username: "foodie_lover",
    userprofile: "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timePosted: "4h",
    hasStory: true
  },
  {
    username: "fitness_freak",
    userprofile: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timePosted: "6h",
    hasStory: true
  },
  {
    username: "artsy_corner",
    userprofile: "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timePosted: "8h",
    hasStory: true
  },
  {
    username: "adventure_seeker",
    userprofile: "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    storyImage: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timePosted: "12h",
    hasStory: true
  }
];

const userData = [
  {
    username: "travel_diaries",
    userlocation: "Paris, France",
    userprofile:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 1200,
    commentCount: 45,
    shareCount: 30,
    caption:
      "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
    timeAgoUploaded: 5,
  },
  {
    username: "foodie_lover",
    userlocation: "Mumbai, India",
    userprofile:
      "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 530,
    commentCount: 20,
    shareCount: 12,
    caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
    timeAgoUploaded: 12,
  },
  {
    username: "fitness_freak",
    userlocation: "New York, USA",
    userprofile:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 800,
    commentCount: 60,
    shareCount: 25,
    caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
    timeAgoUploaded: 24,
  },
  {
    username: "artsy_corner",
    userlocation: "London, UK",
    userprofile:
      "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: true,
    likeCount: 950,
    commentCount: 78,
    shareCount: 40,
    caption:
      "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
    timeAgoUploaded: 7,
  },
  {
    username: "adventure_seeker",
    userlocation: "Kyoto, Japan",
    userprofile:
      "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userPost:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    like: false,
    likeCount: 600,
    commentCount: 33,
    shareCount: 18,
    caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
    timeAgoUploaded: 18,
  },
];

let currentStoryTimeout;
let currentProgressAnimation;

function createPost() {
  const postContainer = document.querySelector(".post");
  postContainer.innerHTML = "";

  userData.forEach((userData, index) => {
    const posts = `    
                <div class="post-header">
                    <div class="user-info">
                        <div class="user-avatar"><img src="${userData.userprofile}" alt=""></div>
                        <span class="username">${userData.username}</span>
                    </div>
                    <img src="./Assets/icons8-menu-horizontal-50.png" alt="" class="icon-more">
                </div>
                
                <div class="post-image" data-index="${index}">
                    <img src="${userData.userPost}" alt="">
                    <div class="heart-animation">
                        <i class="ri-heart-fill"></i>
                    </div>
                </div>
                
                <div class="post-actions">
                    <div class="left-actions">
                        <div id="like" class="post-action-item">
                            <i id="${index}" ${userData.like ? "class='ri-heart-fill icon-heart'" : "class='ri-heart-line icon-heart'"}></i>
                            <h6>${userData.likeCount}</h6>
                        </div>
                        <div id="comment" class="post-action-item">
                            <img src="./Assets/icons8-topic-50.png" alt="" class="icon-comment">
                            <h6>${userData.commentCount}</h6>
                        </div>
                        <div id="share" class="post-action-item">
                            <img src="./Assets/icons8-sent-50.png" alt="" class="icon-share">
                            <h6>${userData.shareCount}</h6>
                        </div>
                    </div>
                    <div class="right-actions">
                        <img src="./Assets/icons8-bookmark-outline-48.png" alt="" class="icon-bookmark">
                    </div>
                </div>
                
                
                <div class="post-caption">
                    <span class="username">${userData.username}</span>
                    ${userData.caption}                  
                </div>
                
                <div class="post-comments">
                    <span class="view-comments">View all comments</span>
                </div>
                
                <div class="post-time">${userData.timeAgoUploaded} days ago</div>  
        `;
    postContainer.innerHTML += posts;
  });

  setupDoubleClickLike();
  likePost();
}

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

function closeStory() {
  const modal = document.querySelector(".story-modal");
  const progressBar = modal.querySelector(".progress-bar");

  progressBar.style.animation = "none";

  modal.innerHTML = "";
  modal.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", createStory);
document.addEventListener("DOMContentLoaded", createPost);
document.addEventListener("DOMContentLoaded", createStory);
