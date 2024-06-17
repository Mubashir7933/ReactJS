import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState('purple');
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: count }}
      >
        <h1>Hello world!</h1>
        <div className="buttons">
          <button
            onClick={() => setCount('red')}
            className="text-3xl font-bold underline text-white"
            style={{ backgroundColor: 'grey' }}
          >
            Red
          </button>
          <button
            onClick={() => setCount('blue')}
            className="text-3xl font-bold underline text-white"
            style={{ backgroundColor: 'grey' }}
          >
            blue
          </button>
          <button
            onClick={() => setCount('green')}
            className="text-3xl font-bold underline text-white"
            style={{ backgroundColor: 'grey' }}
          >
            green
          </button>
          <button
            onClick={() => setCount('orange')}
            className="text-3xl font-bold underline text-white"
            style={{ backgroundColor: 'grey' }}
          >
            orange
          </button>
          <button
            onClick={() => setCount('olive')}
            className="text-3xl font-bold underline text-white"
            style={{ backgroundColor: 'grey' }}
          >
            olive
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
