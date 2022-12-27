const cards = document.querySelectorAll(".card");
const daysTop = document.querySelector(".days-top");
const daysBottom = document.querySelector(".days-bottom");
const hoursTop = document.querySelector(".hours-top");
const hoursBottom = document.querySelector(".hours-bottom");
const minutesTop = document.querySelector(".minutes-top");
const minutesBottom = document.querySelector(".minutes-bottom");
const secondsTop = document.querySelector(".seconds-top");
const secondsBottom = document.querySelector(".seconds-bottom");

const countDownDate = new Date("Nov 24, 2023 20:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysTop.textContent = days;
  daysBottom.textContent = days;
  hoursTop.textContent = hours;
  hoursBottom.textContent = hours;
  minutesTop.textContent = minutes;
  minutesBottom.textContent = minutes;
  secondsTop.textContent = seconds;
  secondsBottom.textContent = seconds;

  if (distance < 0) {
    clearInterval();
    daysTop.innerHTML = "0";
    daysBottom.innerHTML = "0";
    hoursTop.innerHTML = "0";
    hoursBottom.innerHTML = "0";
    minutesTop.innerHTML = "0";
    minutesBottom.innerHTML = "0";
    secondsTop.innerHTML = "0";
    secondsBottom.innerHTML = "0";
    secondsTop.classList.remove("flip");
    secondsBottom.classList.remove("flip");
  }

  if (seconds === 0) {
    minutesTop.classList.add("flip");
    minutesBottom.classList.add("flip");
  }
  if (minutes === 0) {
    hoursTop.classList.add("flip");
    hoursBottom.classList.add("flip");
  }
  if (hours === 0) {
    daysTop.classList.add("flip");
    daysBottom.classList.add("flip");
  }
}, 1000);

setInterval(() => {
  minutesTop.classList.remove("flip");
  minutesBottom.classList.remove("flip");
  hoursTop.classList.remove("flip");
  hoursBottom.classList.remove("flip");
  daysTop.classList.remove("flip");
  daysBottom.classList.remove("flip");
}, 1950);
