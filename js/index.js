const playBtn = document.querySelector(".play");
const trailer = document.querySelector(".trailer");
const video = document.querySelector(".trailer video");

playBtn.addEventListener("click", function (e) {
  trailer.classList.add("active");
  video.play();
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function () {
  trailer.classList.remove("active");
  video.pause();
  video.currentTime = 0;
});

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");

  banner.style.background = `url("./drive-download-20251114T065746Z-1-001/movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) content.classList.add("active");
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    fullWidth: false,
    indicators: true,
  });

  setInterval(function () {
    instances.forEach(function (inst) {
      inst.next();
    });
  }, 3000);
});
