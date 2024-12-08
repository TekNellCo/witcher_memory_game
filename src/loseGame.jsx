import { deadBtnSFX } from './sounds';
import lossEreden from './assets/loss/ereden.mp4';

function LoseGame({ gameReset, isMuted }) {
  return (
    <>
      <div className="betweenRoundDiv"></div>
      <button
        onClick={() => {
          gameReset(), deadBtnSFX(isMuted);
        }}
        className="loseGameBtn">
        Die
      </button>
      <video className="loseVideo" autoPlay muted loop playsInline typeof="video/mp4" src={lossEreden}></video>
    </>
  );
}

export default LoseGame;
