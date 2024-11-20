function showImage(imageId) {
  const images = document.querySelectorAll("#page3 #top img");

  images.forEach((img) => {
    img.classList.remove("active");
  });

  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.classList.add("active");
  }
}

function changeImage(cardId, targetId) {
  const images = document.querySelectorAll(`#card[data-card="${cardId}"] img`);

  images.forEach((img) => img.classList.remove("part4Active"));

  const targetImage = document.getElementById(targetId);
  if (targetImage) {
    targetImage.classList.add("part4Active");
  }
}

document.querySelectorAll("#btnGrouppage4 a").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const cardId = anchor.getAttribute("data-card");
    console.log(cardId);
    const targetId = anchor.getAttribute("data-target");
    console.log(targetId);

    changeImage(cardId, targetId);
  });
});

document.querySelectorAll("#colors div").forEach((colorDiv) => {
  colorDiv.addEventListener("click", () => {
    const cardId = colorDiv.getAttribute("data-card");
    const targetId = colorDiv.getAttribute("data-target");
    changeImage(cardId, targetId);
  });
});

function showImagePage6(imageId) {
  const images = document.querySelectorAll("#page6  img");

  images.forEach((img) => {
    img.classList.remove("page6Active");
  });

  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.classList.add("page6Active");
  }
}

function showImagePage9(imageId) {
  const images = document.querySelectorAll("#page9  img");

  images.forEach((img) => {
    img.classList.remove("page9Active");
  });

  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.classList.add("page9Active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#bottom button"); // Select all buttons
  const images = document.querySelectorAll("#page8  #right  #top img"); // Select all images in #top

  console.log(buttons);
  console.log(images);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove the active class from all images
      images.forEach((img) => img.classList.remove("active"));

      // Add the active class to the corresponding image
      images[index].classList.add("active");
    });
  });
});

// gsap.to("#page3 #animationEffect #top", {
//   transform: "translateY(0%)",
//   duration: 10,
//   ease: "linear",
//   scrollTrigger: {
//     trigger: "#page3",
//     pin: true,
//     start: "top 90%", // Animation starts
//     end: "top -10%",
//     scrub: 1,
//     scroller: "body",
//     markers: true,
//   },
// });
