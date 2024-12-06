import { useEffect, useState } from 'react';
import './index.css';

import GameBoard from './gameBoard';
import WinRound from './winRound';
import LoseGame from './loseGame';
import LoadingScreen from './loading';

function App() {
  const [state, setState] = useState('loading');
  const [round, setRound] = useState('firstRound');
  const [strike, setStrike] = useState(0);
  const [won, setWin] = useState(false);

  ////sets state and rounds on midRound page///setRound is only for rounds, setState switches between rounds and other states
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

  /////checks winning conditions and switches to mid-round page
  useEffect(() => {
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
      }
    }
  }, [won, state]);

  /////changes number of wrong guess's you can make before losing
  useEffect(() => {
    if (state === 'firstRound' && strike === 7) {
      setState('loseGame');
    } else if (state === 'secondRound' && strike === 20) {
      setState('loseGame');
    } else if (state === 'thirdRound' && strike === 26) {
      setState('loseGame');
    }
    console.log(state);
    console.log(strike);
  }, [strike]);

  /////resets the game to defaults
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
        {state === 'loading' && <LoadingScreen setState={setState} />}
        <div className={`gameContainer  ${state === 'loading' ? 'hidden' : 'visible'}    ${state}`}>
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
