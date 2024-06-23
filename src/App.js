import React from 'react';
import './App.css';

const App = () => {
  const handleClick = () => {
    window.location.href = 'https://vxg9g.webar.run/8237427486333416546/0.0.1/';
  };

  return (
    <div className="App">
      <button className="start-button" onClick={handleClick}>START</button>
    </div>
  );
};

export default App;
