import testCard from './assets/ConvertedCards/10030000 - Milaen.webp';
import { useState, useEffect } from 'react';
import cardCreatorShuffle from './cards';

function GameBoard() {
  const [shuffledCards, setShuffledCards] = useState([]); ///stored shuffled cards
  const [isHidden, setIsHidden] = useState([]); ///tracks if cards are hidden or not

  /////pulls shuffled cards from cards.jsx
  useEffect(() => {
    const pulledCards = cardCreatorShuffle();
    setShuffledCards(pulledCards);
    setIsHidden(new Array(pulledCards.length).fill(true));
    console.log('shuffle cards pulled', pulledCards);
  }, []);

  const cardBackground = '/src/assets/card_background.webp'; ///default card background

  function handleCardClick(index) {
    ////switches from facedown to up and vice-verse
    setIsHidden((previous) => previous.map((hidden, i) => (i === index ? !hidden : hidden)));
  }
  return (
    <>
      <div className="gameContainer">
        {shuffledCards.map((cards, index) => (
          <div key={index} className="cardContainer" onClick={() => handleCardClick(index)}>
            <div className={`card ${isHidden[index] ? '' : 'flipped'}`}>
              <div className="front">
                <img src={cardBackground} alt="" />
              </div>
              <div className="back">
                <img src={cards.src} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GameBoard;
