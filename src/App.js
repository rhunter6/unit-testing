import React, {useState } from 'react';

import logo from "./logo.svg";
import "./App.css";
import ClickCounter from './ClickCounter/ClickCounter';
import FancyButton from "./FancyButton/FancyButton";

function App() {
  const [fancyCount, setFancyCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br />
      <ClickCounter />
      <br />
      <FancyButton onClick={() => setFancyCount(fancyCount + 1)} >Fancy Button</FancyButton>
      <div>The Fancy Button Counter: {fancyCount}</div>
    </div>
  );
}

export default App;
