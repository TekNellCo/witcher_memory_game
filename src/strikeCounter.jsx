import { useEffect, useState } from 'react';

function StrikeCounter({ strike, round, state }) {
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
    maxStrikes = '16';
  } else if (round === 'thirdRound') {
    maxStrikes = '20';
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
    </>
  );
}

export default StrikeCounter;
