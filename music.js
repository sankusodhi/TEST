document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const progress = document.getElementById('progress');
  
    playButton.addEventListener('click', () => {
      audio.play();
    });
  
    pauseButton.addEventListener('click', () => {
      audio.pause();
    });
  
    audio.addEventListener('timeupdate', () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${progressPercent}%`;
    });
  });
  