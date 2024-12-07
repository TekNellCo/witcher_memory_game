function LoadingScreen({ setState, state }) {
  return (
    <>
      <div className="loadingContainer">
        <h1 className={`loadingHeader ${state === 'loadingDone' ? 'hidden' : ''}`}>Loading</h1>
        <button onClick={() => setState('firstRound')} className={`startButton ${state === 'loading' ? 'hidden' : 'active'}`}>
          Start
        </button>
      </div>
    </>
  );
}

export default LoadingScreen;
