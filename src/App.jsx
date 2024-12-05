import { useEffect, useState } from 'react';
import './index.css';

import GameBoard from './gameBoard';

function App() {
  const [state, setState] = useState('');
  const [round, setRound] = useState('firstRound');
  const [strike, setStrike] = useState(0);
  const [won, setWin] = useState(false);

  useEffect(() => {
    // console.log(won);
    if (won) {
      if (round === 'firstRound') {
        setState('winRound');
        /* placeholders */
        setRound('secondRound');
        console.log(round);
      } else if (round === 'secondRound') {
        setState('winRound');
        // placeholder
        console.log(round);
      } else if (round === 'thirdRound') {
        // placeholder
        console.log(round);

        setState('win');
      }
    }
  }, [won, round]);

  // useEffect(() => {
  //   if (round === 'firstRound' && strike === 5) {
  //     setState = 'gameOver';
  //   } else if (round === 'secondRound' && strike === 6) {
  //     setState === 'gameOver';
  //   } else if (round === 'thirdRound' && strike === 7) {
  //     setState = 'gameOver';
  //   }
  // }, [strike]);

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
      <div className="pageContainer">
        <div className={`gameContainer ${round}`}>
          {round === 'firstRound' && <GameBoard addStrike={setStrike} win={setWin} round={round} />}

          {/* placeholders */}
          {round === 'secondRound' && <button onClick={() => setRound('thirdRound')}>Click here</button>}
          {round === 'thirdRound' && <GameBoard addStrike={setStrike} win={setWin} round={round} />}
          {/* placeholders */}
        </div>
      </div>
    </>
  );
}

export default App;
