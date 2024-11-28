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
function createPost() {
  const postContainer = document.querySelector(".post");
  postContainer.innerHTML = "";

  userData.forEach((userData) => {
    const posts = `    
                <div class="post-header">
                    <div class="user-info">
                        <div class="user-avatar"><img src="${userData.userprofile}" alt=""></div>
                        <span class="username">${userData.username}</span>
                    </div>
                    <img src="./Assets/icons8-menu-horizontal-50.png" alt="" class="icon-more">
                </div>
                
                <div class="post-image"><img src="${userData.userPost}" alt=""></div>
                
                <div class="post-actions">
                    <div class="left-actions">
                        <div id="like" class="post-action-item">
                            <img class="icon-heart" src="./Assets/icons8-heart-50.png">
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
}

function createStory() {
  const storyContainer = document.querySelector(".stories");
  storyContainer.innerHTML = "";

  userData.forEach((user, index) => {
    const story = `
        <div class="story-item">
            <div class="story-avatar">
                <img src="${user.userprofile}" alt="" id="${index}">
            </div>
            <span>${user.username}</span>
        </div>
        `;
    storyContainer.innerHTML += story;
  });

  const storyAvatars = document.querySelectorAll(".story-avatar img");
  storyAvatars.forEach((avatar) => {
    avatar.addEventListener("click", (e) => {
      const storyId = e.target.id;
      openStory(userData[storyId]);
    });
  });
}

function openStory(user) {
  const modal = document.querySelector(".story-modal");
  modal.classList.add("active");

  const storyModal = `
        <div class="story-modal-header">
            <div class="story-user-info">
                <div class="story-avatar">
                    <img src="${user.userprofile}" alt="">
                </div>
                <span class="story-username">${user.username}</span>
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
                <img src="${user.userPost}" alt="">
            </div>
        </div>

        <div class="story-footer">
            <div class="reply-input">
                <input type="text" placeholder="Reply to ${user.username}...">
            </div>
            <div class="story-reactions">
                <button class="like-btn"><i class="ri-heart-line"></i></button>
                <button class="share-btn"><i class="ri-share-forward-line"></i></button>
            </div>
        </div>
    `;
  modal.innerHTML = storyModal;

  const progressBar = modal.querySelector(".progress-bar");
  progressBar.style.animation = "none";
  progressBar.offsetHeight;
  progressBar.style.animation = "progress 6s linear";

  progressBar.addEventListener("animationend", () => {
    closeStory();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeStory();
    }
  });

  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeStory);
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
