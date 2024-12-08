import { useEffect } from 'react';
import { ciriSFX, geraltSFX, trissSFX } from './sounds';
import { winBtnSFX } from './sounds';
import triss from './assets/win/Triss.webm';
import ciri from './assets/win/Ciri.webm';
import geralt from './assets/win/Geralt.webm';

function WinRound({ state, round, setRoundButton, gameReset, isMuted }) {
  useEffect(() => {
    if (state === 'wonRound') {
      if (round === 'firstRound') {
        trissSFX(isMuted);
      } else if (round === 'secondRound') {
        ciriSFX(isMuted);
      } else if (round === 'thirdRound') {
        geraltSFX(isMuted);
      }
    }
  }, [state, round]);

  const nextRoundButton = (
    <button
      onClick={() => {
        setRoundButton(), winBtnSFX(isMuted);
      }}
      className={`winButton ${round}`}>
      Next
    </button>
  );
  const resetGameBtn = (
    <button
      onClick={() => {
        gameReset(), winBtnSFX(isMuted);
      }}
      className={`winButton ${round}`}>
      Replay?
    </button>
  );

  return (
    <>
      <div className="betweenRoundDiv">
        {round === 'thirdRound' ? resetGameBtn : nextRoundButton}
        {round === 'firstRound' && <video className="winVideo" autoPlay muted loop playsInline typeof="video/webm" src={triss}></video>}
        {round === 'secondRound' && <video className="winVideo" autoPlay muted loop playsInline typeof="video/webm" src={ciri}></video>}
        {round === 'thirdRound' && <video className="winVideo" autoPlay muted loop playsInline typeof="video/webm" src={geralt}></video>}
      </div>
    </>
  );
}

export default WinRound;
