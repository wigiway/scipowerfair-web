import React from 'react';
import './App.css';

const App = () => {
  const handleClick = () => {
    window.location.href = 'https://qx58l.webar.run/45989794235815432/0.0.8/';
  };

  return (
    <div className="App">
      <button className="start-button" onClick={handleClick}>START</button>
    </div>
  );
};

export default App;
