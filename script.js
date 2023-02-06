const audioElement = document.getElementById("audio-element");
const songTitle = document.getElementById("song-title");

audioElement.ontimeupdate = function() {
  songTitle.innerHTML = "Playing: " + audioElement.currentSrc.split("/").pop();
};
