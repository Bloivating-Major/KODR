```javascript
// Map containing section IDs and their hover background colors
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

const defaultBgColor = "#0F1215";

const sections = document.querySelectorAll(".card");

sections.forEach((section) => {
  section.addEventListener("mouseover", () => {
    const id = section.id;
    const hoverColor = sectionColors[id];
    if (hoverColor) {
      section.style.backgroundColor = hoverColor;
      const video = section.querySelector("#videosContent");
      video.style.display = "block";
    }
  });

  section.addEventListener("mouseleave", () => {
    section.style.backgroundColor = defaultBgColor;
    const video = section.querySelector("#videosContent");
    if (video) video.style.display = "none";
  });

  section.addEventListener("mousemove", () => {
    let cardWidth = videoContainer.getBoundingClientRect().width;
    let xVal = gsap.utils.mapRange(
      0,
      window.innerWidth,
      300 + cardWidth,
      window.innerWidth - cardWidth - 150,
      e.clientX
    );
    gsap.to("#videosContent", {
      left: xVal + "px",
      ease: Power3,
    });
  });
});
```
