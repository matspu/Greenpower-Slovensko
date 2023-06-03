window.addEventListener("scroll", e => {
   if (window.scrollY > 50) {
      document.querySelector("nav").style.backgroundColor = "rgba(255, 255, 255, 0.322)";
   } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
   }
});

const hamburger = document.querySelector(".nav-hamburger");
const navToggle = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", e => {
   hamburger.classList.toggle("toggle");
   navToggle.classList.toggle("open");
});