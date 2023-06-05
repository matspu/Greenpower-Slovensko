window.addEventListener("scroll", e => {
   if (window.scrollY > 50) {
      document.querySelector("nav").style.backgroundColor = "rgba(128, 128, 128, 0.300)";
      document.querySelector("nav").style.backdropFilter = "blur(5px)";
   } else {
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.backdropFilter = "none";
   }
});

const hamburger = document.querySelector(".nav-hamburger");
const navToggle = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", e => {
   hamburger.classList.toggle("toggle");
   navToggle.classList.toggle("open");
});