import { useEffect, useState } from 'react';
import './index.css';
import StrikeCounter from './strikeCounter';
import GameBoard from './gameBoard';
import WinRound from './winRound';
import LoseGame from './loseGame';
import LoadingScreen from './loading';
import { eredenSFX, playMusic } from './sounds';

function App() {
  const [isMuted, setMuted] = useState(false);
  const [state, setState] = useState('loading');
  const [round, setRound] = useState('firstRound');
  const [strike, setStrike] = useState(0);
  const [won, setWin] = useState(false);

  function muteSounds() {
    setMuted((previous) => {
      const newMuteState = !previous;
      playMusic(newMuteState); // Passes the updated mute state to playMusic to pause song
      return newMuteState;
    });
  }

  ////checks if loading is done then triggers function to unhide start button
  useEffect(() => {
    // If the page is already loaded, set the state immediately
    if (document.readyState === 'complete') {
      setState('loadingDone');
    } else {
      // Otherwise, listen for the load event
      const handleLoad = () => {
        setState('loadingDone');
      };

      window.addEventListener('load', handleLoad);

      // Cleanup the event listener when the component is unmounted
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);
  //////used for testing
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setState('loadingDone');
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  ////sets state and rounds on midRound page///setRound is only for rounds, setState switches between rounds and other states
  function setRoundButton() {
    if (round === 'firstRound') {
      setState('secondRound');
      setRound('secondRound');
    } else if (round === 'secondRound') {
      console.log(round);
      setState('thirdRound');
      setRound('thirdRound');
    }
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
      eredenSFX(isMuted);
    } else if (state === 'secondRound' && strike === 16) {
      setState('loseGame');
      eredenSFX(isMuted);
    } else if (state === 'thirdRound' && strike === 20) {
      setState('loseGame');
      eredenSFX(isMuted);
    }
  }, [strike]);

  /////resets the game to defaults
  function gameReset() {
    setRound('firstRound');
    setState('firstRound');
    setStrike(0);
    setWin(false);
  }

  /////function to hide or unhide returning strings 'hidden' or 'visible' for className
  function loadingVisual() {
    return state === 'loading' || state === 'loadingDone' ? 'hidden' : 'visible';
  }

  ////combined props into an object for cleaner code
  const repeatedProps = {
    isMuted,
    addStrike: setStrike,
    win: setWin,
    state,
  };

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="/Background_desktop.webm"></video>
      <div className="pageContainer">
        {(state === 'loading' || state === 'loadingDone') && <LoadingScreen isMuted={isMuted} setState={setState} state={state} />}
        {state == 'loading' || state == 'loadingDone' ? '' : <StrikeCounter muteSounds={muteSounds} state={state} strike={strike} round={round} />}
        <div className={`gameContainer  ${loadingVisual()} ${state}`}>
          {state === 'firstRound' && <GameBoard {...repeatedProps} />}
          {state === 'secondRound' && <GameBoard {...repeatedProps} />}
          {state === 'thirdRound' && <GameBoard {...repeatedProps} />}
          {state === 'wonRound' && <WinRound isMuted={isMuted} state={state} round={round} setRoundButton={setRoundButton} gameReset={gameReset} />}
          {state === 'loseGame' && <LoseGame isMuted={isMuted} gameReset={gameReset} />}
        </div>
      </div>
    </>
  );
}

export default App;
