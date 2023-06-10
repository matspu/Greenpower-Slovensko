
const videoControls = document.querySelector("video");
const videoOverlay = document.querySelector(".video-section-overlay");
var videoPlaying = false;


if (window.innerWidth < 580) {
   videoControls.setAttribute("controls", true);
} else {
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
}

