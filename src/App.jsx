import { useEffect, useState } from 'react';
import './index.css';

import GameBoard from './gameBoard';

function App() {
  const [state, setState] = useState('');
  const [round, setRound] = useState('firstRound');
  const [strike, setStrike] = useState(0);

  useEffect(() => {
    if (round === 'firstRound' && strike === 5) {
      setState = 'gameOver';
    } else if (round === 'secondRound' && strike === 6) {
      setState === 'gameOver';
    } else if (round === 'thirdRound' && strike === 7) {
      setState = 'gameOver';
    }
  }, [strike]);

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
      <div className="pageContainer">
        <div className={`gameContainer ${round}`}>
          <GameBoard addStrike={setStrike} />
        </div>
      </div>
    </>
  );
}

export default App;
