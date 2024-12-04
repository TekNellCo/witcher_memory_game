import testCard from './assets/ConvertedCards/10030000 - Milaen.webp';
import { useState, useEffect } from 'react';
import cardCreatorShuffle from './cards';

function GameBoard() {
  const [shuffledCards, setShuffledCards] = useState([]); ///stored shuffled cards

  /////pulls shuffled cards from cards.jsx
  useEffect(() => {
    const pulledCards = cardCreatorShuffle();
    setShuffledCards(pulledCards);
    console.log('shuffle cards pulled', pulledCards);
  }, []);

  const cardBackground = '/src/assets/card_background.webp'; ///default card background
  const [isHidden, setIsHidden] = useState(true); ///is card facedown or up

  function handleCardClick() {
    ////switches from facedown to up
    setIsHidden((previous) => !previous);
  }
  return (
    <>
      <div className="gameContainer">
        {/* ////////////////// */}
        <div className="cardContainer" onClick={handleCardClick}>
          <div className={`card ${isHidden ? 'flipped' : ''}`}>
            <div className="front">
              <img src={cardBackground} alt="" />
            </div>
            <div className="back">
              <img src={testCard} alt="" />
            </div>
          </div>
        </div>
        {/* ////////////////// */}
        <div className="cardContainer" onClick={handleCardClick}>
          <div className={`card ${isHidden ? 'flipped' : ''}`}>
            <div className="front">
              <img src={cardBackground} alt="" />
            </div>
            <div className="back">
              <img src={testCard} alt="" />
            </div>
          </div>
        </div>
        {/* ////////////////// */}
      </div>
    </>
  );
}

export default GameBoard;
