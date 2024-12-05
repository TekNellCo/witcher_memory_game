import testCard from './assets/ConvertedCards/10030000 - Milaen.webp';
import { useState, useEffect } from 'react';
import cardCreatorShuffle from './cards';

function GameBoard() {
  const cardBackground = '/src/assets/card_background.webp'; ///default card background
  const [shuffledCards, setShuffledCards] = useState([]); ///stored shuffled cards
  const [isHidden, setIsHidden] = useState([]); ///tracks if cards are hidden or not
  const [matchedCards, setMatchedCards] = useState([]);
  const [isFlipped, setFlippedCards] = useState([]);

  /////pulls shuffled cards from cards.jsx
  useEffect(() => {
    const pulledCards = cardCreatorShuffle();
    setShuffledCards(pulledCards);
    setIsHidden(new Array(pulledCards.length).fill(true)); /////puts all the cards in a hidden array
    console.log('shuffle cards pulled', pulledCards);
  }, []);

  function handleCardClick(card, index) {
    if (matchedCards.includes(card)) return;

    setFlippedCards((currentFlipped) => {
      const updateFlipped = [...currentFlipped, card];

      if (updateFlipped.length === 2) {
        const [firstCard, secondCard] = updateFlipped;
        if (firstCard.name === secondCard.name) {
          setMatchedCards((currenMatch) => [...currenMatch, firstCard, secondCard]);
        } else {
          setTimeout(() => {
            setIsHidden((hiddenValue) =>
              hiddenValue.map((hidden, i) => (shuffledCards[i] === firstCard || shuffledCards[i] === secondCard ? true : hidden))
            );
          }, 800);
        }
        return [];
      }
      return updateFlipped;
    });

    // console.log('1st card', firstCard, '2nd card', secondCard);

    // console.log('index log', index, 'card log', card.name);
    setIsHidden((hiddenValue) => hiddenValue.map((hidden, i) => (i === index ? !hidden : hidden)));
  }

  return (
    <>
      <div className="gameContainer">
        {shuffledCards.map((card, index) => (
          <div key={index} className="cardContainer" onClick={() => handleCardClick(card, index)}>
            <div className={`card ${isHidden[index] ? '' : 'flipped'}`}>
              <div className="front">
                <img src={cardBackground} alt="" />
              </div>
              <div className="back">
                <img src={card.src} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GameBoard;
