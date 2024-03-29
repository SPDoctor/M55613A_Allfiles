
var newVideo = document.createElement("video");
newVideo.src = nameOfVideoFile;
newVideo.loop = true;
newVideo.controls = true;
newVideo.poster = "ImageLoading.png";
newVideo.autoplay = false;
document.body.appendChild(newVideo);

newVideo.addEventListener("loadeddata", function () {
  newVideo.play();
}, false);

function togglePlay() {
  if (newVideo.paused) {
    alert("Video current time: " + newVideo.currentTime + ", total duration: " + newVideo.duration);
    newVideo.play();
  }
  else {
    newVideo.pause();
  }
}