const burger = document.querySelector(".burger");
const modal = document.querySelector(".modal--menu");
const modalClose = document.querySelector(".modal-close");

burger.addEventListener("click", () => {
  modal.classList.add("active");
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});
