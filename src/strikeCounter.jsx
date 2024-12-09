import { useEffect, useState } from 'react';

function StrikeCounter({ strike, round, state, muteSounds }) {
  const strikes = strike.toString();
  let maxStrikes;
  const [visibility, setVisibility] = useState('hidden');

  useEffect(() => {
    if (state !== 'loading' || state !== 'loadingDone') {
      setVisibility('visible');
    }
  });

  if (round === 'firstRound') {
    maxStrikes = '7';
  } else if (round === 'secondRound') {
    maxStrikes = '10';
  } else if (round === 'thirdRound') {
    maxStrikes = '15';
  } else {
    maxStrikes = '0';
  }

  return (
    <>
      <div className={`strikeChances ${visibility}`}>
        <div>
          <p className="strikes">
            {strikes}/{maxStrikes}
          </p>
        </div>
      </div>
      <button onClick={muteSounds} className="muteButton">
        Mute
      </button>
    </>
  );
}

export default StrikeCounter;
