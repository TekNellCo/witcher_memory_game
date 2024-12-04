///////////imports images dynamically
const images = import.meta.glob('./assets/ConvertedCards/*.webp', { eager: true });

const cards = Object.keys(images).map((path) => ({
  name: path.split('/').pop().replace('.webp', ''), // Extracts filename and removes extension
  src: images[path].default, // gets the image
}));

const indices = [...Array(cards.length).keys()]; ////creates an array from cards array
shuffleCards(indices); ///adds it to shuffler

/////Fisher-Yates Shuffle's the whole array
function shuffleCards(shuffleME) {
  for (let i = shuffleME.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleME[i], shuffleME[j]] = [shuffleME[j], shuffleME[i]];
  }
}

const arrayA = []; //array to be filled with initial shuffle

////pushes five cards into arrayA
for (let i = 0; i < 6; i++) {
  arrayA.push(cards[indices[i]]);
}

const arrayC = [...arrayA, ...arrayA]; ///duplicate's arrayA

shuffleCards(arrayC); /////shuffles duplicate array

console.log('shuffled array', arrayC);

export default cards;
