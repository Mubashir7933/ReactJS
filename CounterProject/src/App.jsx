import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './Card';

function App() {
  const [count, setCount] = useState(0);
  let readyValue = count * 5;
  const multipliedValue = () => {
    count < 10 ? setCount(count + 1) : setCount(count);
    readyValue < 50 ? count * 5 : readyValue;
  };

  const decrementValue = () => {
    count > 0 ? setCount(count - 1) : setCount(count);

    readyValue > 0 ? readyValue - 5 : readyValue;
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="addition" onClick={multipliedValue}>
          Addition
        </button>
        <button onClick={decrementValue}>Subtraction</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h2>
          {count} Multiplied Value is {readyValue}
        </h2>
      </div>
      <Card username="Mubashir" />
      <Card username="Ahmed" />
    </>
  );
}

export default App;
