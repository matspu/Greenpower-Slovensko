window.addEventListener("scroll", e => {
   if (window.scrollY > 50) {
      document.querySelector("nav").style.backgroundColor = "rgba(128, 128, 128, 0.300)";
      document.querySelector("nav").style.backdropFilter = "blur(8px)";
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


const videoControls = document.querySelector("video");

videoControls.addEventListener("mouseover", function () { this.controls = true; }, false);

videoControls.addEventListener("mouseout", function() { this.controls = false; }, false);
