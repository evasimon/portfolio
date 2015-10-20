var eye = document.getElementsByClassName("eye");
setInterval(function() {
  eye[0].style.animation = "blink .25s linear infinite";
  eye[1].style.animation = "blink .25s linear infinite";
  setTimeout(function() {
    eye[0].style.animation = "none";
    eye[1].style.animation = "none";
  }, 500)
}, 2000);
