const viewBtns = document.querySelectorAll(".blog-view-btn");
const viewContent = document.querySelector(".blog-wrapper");

viewBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    if (btn.classList.contains("blog-view-btn--grid")) {
      viewContent.classList.remove("one-column");
    } else {
      viewContent.classList.add("one-column");
    }
  });
});
