import { useEffect, useState } from 'react';
import './index.css';

import GameBoard from './gameBoard';
import WinRound from './winRound';
import LoseGame from './loseGame';

function App() {
  const [state, setState] = useState('firstRound');
  const [round, setRound] = useState('firstRound');
  const [strike, setStrike] = useState(0);
  const [won, setWin] = useState(false);

  function setRoundButton() {
    if (round === 'firstRound') {
      console.log(round);
      setState('secondRound');
      setRound('secondRound');
      console.log(round);
    } else if (round === 'secondRound') {
      console.log(round);
      setState('thirdRound');
      setRound('thirdRound');
      console.log(round);
    }
    console.log(round);
  }

  useEffect(() => {
    // console.log(won);
    if (won) {
      if (state === 'firstRound') {
        setState('wonRound');
        setStrike(0);
      } else if (state === 'secondRound') {
        setState('wonRound');
        setStrike(0);
      } else if (state === 'thirdRound') {
        setStrike(0);
        setState('wonRound');

        // setState('win');
      }
    }
  }, [won, state]);

  useEffect(() => {
    if (state === 'firstRound' && strike === 5) {
      setState('loseGame');
    } else if (state === 'secondRound' && strike === 6) {
      setState('loseGame');
    } else if (state === 'thirdRound' && strike === 7) {
      setState('loseGame');
    }
    console.log(state);
    console.log(strike);
  }, [strike]);

  function gameReset() {
    setRound('firstRound');
    setState('firstRound');
    setStrike(0);
    setWin(false);
  }

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
      <div className="pageContainer">
        <div className={`gameContainer ${state}`}>
          {state === 'firstRound' && <GameBoard addStrike={setStrike} win={setWin} state={state} />}
          {state === 'secondRound' && <GameBoard addStrike={setStrike} win={setWin} state={state} />}
          {state === 'thirdRound' && <GameBoard addStrike={setStrike} win={setWin} state={state} />}
          {state === 'wonRound' && <WinRound state={state} round={round} setRoundButton={setRoundButton} gameReset={gameReset} />}
          {state === 'loseGame' && <LoseGame gameReset={gameReset} />}
        </div>
      </div>
    </>
  );
}

export default App;
