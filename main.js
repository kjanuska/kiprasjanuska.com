window.onscroll = function() {stickerHeader()};
var header = document.getElementById("navHeader");
var sticky = header.offsetTop;
function stickerHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}