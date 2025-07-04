const tabs = document.querySelectorAll(".portfolio-tab");
const tabsContent = document.querySelectorAll(".portfolio-tab-content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    tabsContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabsContent[index].classList.add("active");
  });
});
