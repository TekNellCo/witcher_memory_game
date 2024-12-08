let currentAudio = null;
import cardFlip from './assets/sounds/cardflip.mp3';
import ciri from './assets/sounds/ciri.mp3';
import mainSoundTrack from './assets/sounds/Combined SoundTrack.mp3';
import deadButton from './assets/sounds/deadbutton.mp3';
import ereden from './assets/sounds/ereden.mp3';
import geralt from './assets/sounds/geralt.mp3';
import triss from './assets/sounds/triss.mp3';
import winButton from './assets/sounds/winbutton.mp3';
import loopAudio from './assets/sounds/witcherMusic.mp3';

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
      currentAudio = new Audio(mainSoundTrack);
      currentAudio.play();

      currentAudio.addEventListener('ended', () => {
        const nextAudio = new Audio(loopAudio);
        nextAudio.volume = 0.7;
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
  const audio = new Audio(triss);
  audio.volume = 0.8;
  audio.play();
}

export function ciriSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(ciri);
  audio.volume = 0.8;
  audio.play();
}

export function geraltSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(geralt);
  audio.volume = 0.8;
  audio.play();
}

export function eredenSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(ereden);
  audio.volume = 0.8;
  audio.play();
}

export function cardFlipSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(cardFlip);
  audio.volume = 0.2;
  audio.play();
}

export function deadBtnSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(deadButton);
  audio.volume = 0.7;
  audio.play();
}

export function winBtnSFX(isMuted) {
  if (isMuted) return;
  const audio = new Audio(winButton);
  audio.volume = 0.7;
  audio.play();
}
