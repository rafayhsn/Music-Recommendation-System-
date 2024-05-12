document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = new Audio();
    const playPauseBtn = document.getElementById("playPauseBtn");
    const trackTitle = document.getElementById("trackTitle");

    function playRandomTrack() {
      fetch("/randomTrack")
        .then(response => response.text())
        .then(track => {
          audioPlayer.src = "C:/Users/SiliCon/Desktop/bdaProject/dataset/" + track; // Update URL
          audioPlayer.play();
          playPauseBtn.textContent = "Pause";
          fetchTrackTitle(track);
        })
        .catch(error => console.error("Error fetching random track:", error));
    }

    function fetchTrackTitle(trackPath) {
      const trackTitleText = trackPath.split("/").pop().split(".")[0]; // Extract the track title
      if (trackTitleText) {
        trackTitle.textContent = "Now Playing: " + trackTitleText;
      } else {
        trackTitle.textContent = "Now Playing: Unknown Track";
      }
    }

    function togglePlayPause() {
      if (audioPlayer.paused) {
        playRandomTrack();
      } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
      }
    }

    playPauseBtn.addEventListener("click", togglePlayPause);
  });
