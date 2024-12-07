let currentAudio = null;

export function playMusic(isMuted) {
  console.log(isMuted, 'is muted');
  if (isMuted) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  } else {
    if (!currentAudio || currentAudio.paused) {
      console.log(isMuted, 'playmusic');
      currentAudio = new Audio('src/assets/sounds/Combined SoundTrack.mp3');
      currentAudio.play();
    }
  }
}

export function trissSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('src/assets/sounds/triss.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function ciriSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('src/assets/sounds/ciri.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function geraltSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('src/assets/sounds/geralt.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function eredenSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('src/assets/sounds/ereden.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function cardFlipSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('src/assets/sounds/cardflip.mp3');
  audio.volume = 0.5;
  audio.play();
}
