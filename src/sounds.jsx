let currentAudio = null;

export function playMusic(isMuted) {
  console.log(isMuted, 'is muted');
  if (isMuted) {
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      // currentAudio.currentTime = 0;
    }
  } else {
    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
      }
    } else {
      currentAudio = new Audio('/sounds/Combined SoundTrack.mp3');
      currentAudio.play();

      currentAudio.addEventListener('ended', () => {
        const nextAudio = new Audio('/sounds/witcherMusic.mp3');
        nextAudio.volume = 0.3;
        currentAudio = nextAudio;
        nextAudio.play();

        nextAudio.addEventListener('ended', () => {
          nextAudio.play();
        });
      });
    }
  }
}

export function trissSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/triss.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function ciriSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/ciri.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function geraltSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/geralt.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function eredenSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/ereden.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function cardFlipSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/cardflip.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function deadBtnSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/deadbutton.mp3');
  audio.volume = 0.3;
  audio.play();
}

export function winBtnSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio('/sounds/winbutton.mp3');
  audio.volume = 0.3;
  audio.play();
}
