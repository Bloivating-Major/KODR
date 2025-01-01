// Question 1 Solution
const buttonClick1 = document.getElementById("btn1");
const nameShow = document.getElementById("takeName");
const result = document.getElementById("result");

buttonClick1.addEventListener("click", function () {
  result.innerHTML = nameShow.value;
});

// Question 2 Solution
const buttonClick2 = document.getElementById("btn2");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

buttonClick2.addEventListener("click", function () {
  let src1 = img1.src;
  let src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});

// Question 3 Solution
const inp = document.querySelectorAll(".grp1");
const buttonClick3 = document.getElementById("form3");
const p = document.getElementById("error-message");
buttonClick3.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < inp.length; i++) {
    if (inp[i].value.trim() === "") {
      p.textContent = "Error, All Fields Required";
      break;
    } else {
      p.textContent = "";
    }
  }
});

// Question 4 Solution
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const inpQ4 = document.getElementById("takeInputQ4");
const ul = document.getElementById("ulQ4");

add.addEventListener("click", function () {
  const li = document.createElement("li");
  if (inpQ4.value.trim() === "") {
    alert("Please Enter Some Text!!");
  } else {
    li.textContent = inpQ4.value;
    ul.appendChild(li);
    inpQ4.value = "";
  }
});

remove.addEventListener("click", function () {
  if (ul.lastChild) {
    ul.removeChild(ul.lastChild);
  } else {
    alert("No Items to Remove!!");
  }
});

// Question 5 Solution
const Q5Start = document.querySelector("#Q5Start");
const Q5Stop = document.querySelector("#Q5Stop");
const h3Q5 = document.querySelector("#h3Q5");

var interval;
var count = 0;

Q5Start.addEventListener("click", function () {
  if (interval) {
    clearInterval(interval);
  }

  count = 0;
  interval = setInterval(function () {
    h3Q5.textContent = count;
    count++;
  }, 1000);
});

Q5Stop.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});

// Question 6 Solution
var q6Home = document.querySelector("#q6Home");
var q6About = document.querySelector("#q6About");
var q6Contact = document.querySelector("#q6Contact");
var q6HomeText = document.querySelector("#q6HomeText");
var q6AboutText = document.querySelector("#q6AboutText");
var q6ContactText = document.querySelector("#q6ContactText");

function clearAllText(){
  document.querySelectorAll(".text").forEach(function(para){
    para.style.display = "none";
  })
}

q6HomeText.style.display = "block"

q6Home.addEventListener("click", function () {
  clearAllText();
  q6HomeText.style.display = "block";
});

q6About.addEventListener("click", function () {
  clearAllText();
  q6AboutText.style.display = "block";
});

q6Contact.addEventListener("click", function () {
  clearAllText();
  q6ContactText.style.display = "block";
});


// Question 7 Solution

const  startQ7 = document.querySelector("#startQ7"); 
const  pauseQ7 = document.querySelector("#pauseQ7"); 
const  resumeQ7 = document.querySelector("#resumeQ7"); 
const progressBar = document.querySelector("#progressBarFill");
let width = 0;
let progressInterval;

startQ7.addEventListener("click", function() {
  if (!progressInterval) {
    progressInterval = setInterval(function() {
      if (width >= 100) {
        clearInterval(progressInterval);
        progressInterval = null;
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 50);
  }
});

pauseQ7.addEventListener("click", function() {
  clearInterval(progressInterval);
  progressInterval = null;
});

resumeQ7.addEventListener("click", function() {
  if (!progressInterval) {
    progressInterval = setInterval(function() {
      if (width >= 100) {
        clearInterval(progressInterval);
        progressInterval = null;
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 50);
  }
});
