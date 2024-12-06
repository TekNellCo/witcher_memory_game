function LoseGame({ gameReset }) {
  return (
    <>
      <div className="betweenRoundDiv"></div>
      <button onClick={gameReset} className="loseGameBtn">
        Die
      </button>
      <video className="loseVideo" autoPlay muted loop playsInline typeof="video/mp4" src="src\assets\loss\ereden.mp4"></video>
    </>
  );
}

export default LoseGame;
