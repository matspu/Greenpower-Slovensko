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
const videoOverlay = document.querySelector(".video-section-overlay");
var videoPlaying = false;

videoControls.addEventListener("mouseover", function () {
   this.controls = true; videoOverlay.style.opacity = "0";
}, false);

videoControls.addEventListener("mouseout", function () {
   this.controls = false;
   if (videoPlaying) {
      videoOverlay.style.opacity = "0";
   } else {
      videoOverlay.style.opacity = "1";
   }
}, false);

videoControls.addEventListener("playing", e => { videoOverlay.style.opacity = "0"; videoPlaying = true; });
videoControls.addEventListener("pause", e => { videoOverlay.style.opacity = "1"; videoPlaying = false; });
