const button = document.querySelector("#card #download button");
const progressBar = document.querySelector("#card #progress #progress-bar");
const progressText = document.querySelector("#card #download h1");
const resetButton = document.querySelector("#card #reset button");

let progress = 0;
let intervalId = null; 
let randomNumber = Math.floor(Math.random() * 100);

button.addEventListener("click", () => {
  if (intervalId !== null) return;
  
  intervalId = setInterval(() => {
    if (progress < 100) {
      progress++;
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${progress}%`;
    } else {
      clearInterval(intervalId);
      intervalId = null;
      button.textContent = "Downloaded";
      button.disabled = true;
      resetButton.style.display = "block";
    }
  }, randomNumber);
});

resetButton.addEventListener("click", () => {
  progress = 0;
  progressBar.style.width = "0%";
  progressText.textContent = "0%";
  button.textContent = "Download";
  button.disabled = false;
  resetButton.style.display = "none";
  randomNumber = Math.floor(Math.random() * 100);
});
