import { useState } from 'react';
import './index.css';
import cards from './cards';
import testCard from './assets/ConvertedCards/10030000 - Milaen.webp';

function App() {
  const cardImage = testCard;
  const cardBackground = '/src/assets/card_background.webp';
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  function handleCardClick() {
    setIsHidden((previous) => !previous);
  }

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
      <div className="pageContainer">
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
        </div>
      </div>
    </>
  );
}

export default App;
