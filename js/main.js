const header = document.querySelector("header");
const heroArrow = document.querySelector(".hero__arrow");
const getAllyakor = document.querySelectorAll(".yakor");
const navbar = document.querySelector(".navbar__wrapper");
const hamburger = document.querySelector(".ham");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let y = window.pageYOffset;
    y > 150
      ? header.classList.add("active")
      : header.classList.remove("active");
  });

  heroArrow.addEventListener("click", () => {
    const headerHight = header.offsetHeight;
    const sectionOffset = document.querySelector("section").offsetHeight;
    window.scrollBy({
      top: sectionOffset - headerHight,
      behavior: "smooth",
    });
  });

  getAllyakor.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const topOffset = header.offsetHeight + 10;
      const href = this.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const elemetPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elemetPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("open");
  });
});
