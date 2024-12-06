import testCard from './assets/ConvertedCards/10030000 - Milaen.webp';
import { useState, useEffect } from 'react';
import cardCreatorShuffle from './cards';

function GameBoard({ addStrike, win, state }) {
  // let cards;
  // if (round === 'firstRound') {
  //   cards = 6;
  // } else if (round === 'secondRound') {
  //   cards = 10;
  // } else if (round === 'thirdRound') {
  //   cards = 12;
  // }

  let cards;
  if (state === 'firstRound') {
    cards = 2;
  } else if (state === 'secondRound') {
    cards = 2;
  } else if (state === 'thirdRound') {
    cards = 2;
  }

  const cardBackground = '/src/assets/card_background.webp'; ///default card background
  const [shuffledCards, setShuffledCards] = useState([]); ///stored shuffled cards
  const [isHidden, setIsHidden] = useState([]); ///tracks if cards are hidden or not
  const [matchedCards, setMatchedCards] = useState([]);
  const [isFlipped, setFlippedCards] = useState([]);

  // console.log(matchedCards.length === shuffledCards.length, 'all card match value', allCardsMatch);

  /////pulls shuffled cards from cards.jsx
  useEffect(() => {
    setMatchedCards([]);
    setFlippedCards([]);
    const pulledCards = cardCreatorShuffle(cards);
    setIsHidden(new Array(pulledCards.length).fill(true)); /////puts all the cards in a hidden array

    setShuffledCards(pulledCards);
  }, [state, cards]);

  useEffect(() => {
    if (isFlipped.length === 2) {
      const [firstCard, secondCard] = isFlipped; ///if 2 cards in flipped array, name them
      if (firstCard.name !== secondCard.name) {
        ////compares both cards
        addStrike((prevStrike) => prevStrike + 1); ///adds a strike if they don't match + pushes it to App.js
        setTimeout(() => {
          ////adds a slight delay before turning cards back over
          setIsHidden((hiddenValue) =>
            hiddenValue.map((hidden, i) => (shuffledCards[i] === firstCard || shuffledCards[i] === secondCard ? true : hidden))
          );
        }, 800);
      } else {
        ///cards match so add them to the array
        setMatchedCards((currentMatched) => [...currentMatched, firstCard, secondCard]);
      }
      setFlippedCards([]); // Reset flipped cards after checking
    }
  }, [isFlipped, addStrike, shuffledCards]); // Triggered when isFlipped changes

  function handleCardClick(card, index) {
    if (matchedCards.includes(card)) return; /////if its already in the matched cards array do nothing
    // Flip the card
    setIsHidden((prev) => prev.map((hidden, i) => (i === index ? !hidden : hidden)));
    setFlippedCards((prevFlipped) => {
      const updatedFlipped = [...prevFlipped, card];
      if (updatedFlipped.length === 2) {
        return updatedFlipped; // Return the two flipped cards
      }
      return updatedFlipped; // Otherwise, keep adding the flipped cards
    });
  }
  ///makes sure the array isn't empty and if they match in length push winning condition
  const allCardsMatch = shuffledCards.length > 0 && shuffledCards.length === matchedCards.length;
  useEffect(() => {
    if (allCardsMatch === true) {
      win(true);
      setTimeout(() => win(false), 20);
    }
  }, [allCardsMatch]);

  return (
    <>
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
    </>
  );
}

export default GameBoard;
