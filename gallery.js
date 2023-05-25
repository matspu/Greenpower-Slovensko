


const albums = document.querySelectorAll(".album");
const albumTitle = document.querySelector(".album-title");
// album-images

albums.forEach(album => {
   album.addEventListener("click", e => {
      albumTitle.textContent = album.querySelector("p").textContent;
      // display desired images
   });
});
