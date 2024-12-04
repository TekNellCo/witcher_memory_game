import { useState } from 'react';
import './index.css';
import cards from './cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <video className="background" autoPlay muted loop playsInline typeof="video/webm" src="src\assets\Background_desktop.webm"></video>
    </>
  );
}

export default App;
