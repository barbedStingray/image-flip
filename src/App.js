import React, { useState } from 'react';
import './App.css';

function App() {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="App">
      <div className='card' onClick={handleClick}>
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
          <div className='card-side aSide'>
            <h1>A SIDE</h1>
          </div>
          <div className='card-side bSide'>
            <h1>B SIDE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
