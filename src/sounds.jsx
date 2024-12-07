export function playMusic() {
  const audio = new Audio('src/assets/sounds/Combined SoundTrack.mp3');
  audio.play();
}

export function trissSFX() {
  console.log('it played');
  const audio = new Audio('src/assets/sounds/triss.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function ciriSFX() {
  console.log('it played');
  const audio = new Audio('src/assets/sounds/ciri.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function geraltSFX() {
  console.log('it played');
  const audio = new Audio('src/assets/sounds/geralt.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function eredenSFX() {
  console.log('it played');
  const audio = new Audio('src/assets/sounds/ereden.mp3');
  audio.volume = 0.5;
  audio.play();
}

export function cardFlipSFX() {
  console.log('it played');
  const audio = new Audio('src/assets/sounds/cardflip.mp3');
  audio.volume = 0.5;
  audio.play();
}
