import React from 'react';
import logo from './logo.svg';
import RatioCalc from './ratioCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RatioCalc />
      </header>
    </div>
  );
}

export default App;
