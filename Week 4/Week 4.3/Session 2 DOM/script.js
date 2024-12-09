const deg = 6;
const hour = document.querySelector(".hour-hand");
const min = document.querySelector(".minute-hand");
const sec = document.querySelector(".second-hand");

let initialSecondsDeg, initialMinutesDeg, initialHoursDeg;
let startTime;

const initClock = () => {
  const now = new Date();

  const hh = (now.getHours() % 12) * 30;
  const mm = now.getMinutes() * deg;
  const ss = now.getSeconds() * deg;

  initialSecondsDeg = ss;
  initialMinutesDeg = mm + ss / 60;
  initialHoursDeg = hh + mm / 12;
  startTime = now.getTime();

  hour.style.transform = `rotateZ(${initialHoursDeg}deg)`;
  min.style.transform = `rotateZ(${initialMinutesDeg}deg)`;
  sec.style.transform = `rotateZ(${initialSecondsDeg}deg)`;

  requestAnimationFrame(updateClock);
};

const updateClock = () => {
  const now = new Date();
  const elapsedSeconds = Math.floor((now.getTime() - startTime) / 1000);

  sec.style.transform = `rotateZ(${
    initialSecondsDeg + elapsedSeconds * deg
  }deg)`;
  min.style.transform = `rotateZ(${
    initialMinutesDeg + (elapsedSeconds / 60) * deg
  }deg)`;
  hour.style.transform = `rotateZ(${
    initialHoursDeg + (elapsedSeconds / 3600) * 30
  }deg)`;

  requestAnimationFrame(updateClock);
};

initClock();
