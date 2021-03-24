import logo from "./logo.svg";
import "./App.css";
import ClickCounter from './ClickCounter/ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br />
      <ClickCounter />
    </div>
  );
}

export default App;
