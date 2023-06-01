const hamburger = document.querySelector(".nav-hamburger");
const navToggle = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", e => {
   hamburger.classList.toggle("toggle");
   navToggle.classList.toggle("open");
});