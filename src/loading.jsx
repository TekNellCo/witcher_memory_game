function LoadingScreen({ setState }) {
  return (
    <>
      <div className="loadingContainer">
        <h1 className="loadingHeader">Loading</h1>
        <button onClick={() => setState('firstRound')} className="startButton">
          Start
        </button>
      </div>
    </>
  );
}

export default LoadingScreen;
