import { deadBtnSFX } from './sounds';

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
      <video className="loseVideo" autoPlay muted loop playsInline typeof="video/mp4" src="/loss/ereden.mp4"></video>
    </>
  );
}

export default LoseGame;
