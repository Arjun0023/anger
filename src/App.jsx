import React ,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function BackgroundChanger() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackground = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className="background-changer" style={{ backgroundColor }}>
      <h1>Background Changer</h1>
      <div className="button-container">
        <button onClick={() => changeBackground('red')}>Red</button>
        <button onClick={() => changeBackground('blue')}>Blue</button>
        <button onClick={() => changeBackground('yellow')}>Yellow</button>
        <button onClick={() => changeBackground('green')}>Green</button>
        <button onClick={() => changeBackground('black')}>Black</button>
      </div>
    </div>
  );
}

export default BackgroundChanger;