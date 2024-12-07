import { playMusic } from './sounds';

function LoadingScreen({ setState, state, isMuted }) {
  function setRoundAndMusic() {
    playMusic(isMuted);
    setState('firstRound');
  }

  return (
    <>
      <div className="loadingContainer">
        <h1 className={`loadingHeader ${state === 'loadingDone' ? 'hidden' : ''}`}>Loading</h1>
        <button onClick={setRoundAndMusic} className={`startButton ${state === 'loading' ? 'hidden' : 'active'}`}>
          Start
        </button>
      </div>
    </>
  );
}

export default LoadingScreen;
