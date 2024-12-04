import { useEffect, useState } from 'react';
import './index.css';

import GameBoard from './gameBoard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
      <div className="pageContainer">
        <GameBoard />
      </div>
    </>
  );
}

export default App;
