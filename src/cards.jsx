///////////imports images dynamically

const images = import.meta.glob('./assets/ConvertedCards/*.webp', { eager: true });

const cards = Object.keys(images).map((path) => ({
  name: path.split('/').pop().replace('.webp', ''), // Extract filename and remove extension
  src: images[path].default, // Get the image URL
}));

export default cards;
