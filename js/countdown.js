const modalCountdown = document.querySelector(".modal--coming-soon");
const modalCountdownClose = document.querySelector(".modal-close--coming-soon");
const monthsElement = document.querySelector(".months");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

const countdownDate = new Date("Oct 20, 2025 15:00:00").getTime();

function runCountdown() {
  const nowDate = new Date().getTime();
  const difference = countdownDate - nowDate;

  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.5));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24) - months * 30.5);
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  monthsElement.innerText = "0" + months;
  daysElement.innerText = days < 10 ? "0" + days : days;
  hoursElement.innerText = hours < 10 ? "0" + hours : hours;
  minutesElement.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.innerText = seconds < 10 ? "0" + seconds : seconds;

  if (difference <= 0) {
    clearInterval(intervalId);
    monthsElement.innerText = "00";
    daysElement.innerText = "00";
    hoursElement.innerText = "00";
    minutesElement.innerText = "00";
    secondsElement.innerText = "00";
  }
}

const intervalId = setInterval(runCountdown, 1000);

function handleScroll() {
  if (
    document.documentElement.scrollHeight - 160 <
    window.scrollY + window.innerHeight
  ) {
    window.removeEventListener("scroll", handleScroll);
    setTimeout(() => {
      modalCountdown.classList.add("active");
    }, 4000);
  }
}

window.addEventListener("scroll", handleScroll);

modalCountdownClose.addEventListener("click", () => {
  modalCountdown.classList.remove("active");
});
