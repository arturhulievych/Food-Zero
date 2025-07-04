const playVideoBtn = document.querySelector(".about-video-btn");
const videoPlayer = document.querySelector(".about-video-player");
const closeVideoBtn = document.querySelector(".close-video");

playVideoBtn.addEventListener("click", () => {
  videoPlayer.classList.add("active");
  closeVideoBtn.classList.add("active");
});

closeVideoBtn.addEventListener("click", () => {
  videoPlayer.classList.remove("active");
  closeVideoBtn.classList.remove("active");
});
