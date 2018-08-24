import React, { Component } from 'react';
import './App.css';
import CalcButton from './CalcButton'

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div className="calculator">
          <div className="display">
            <span className="display-content">2+2</span>
          </div>
          <div className="input-section">
            <CalcButton className="grey-btn" symbol="C"/>
            <button className="grey-btn">√</button>
            <button className="grey-btn">%</button>
            <button className="blue-btn">÷</button>

            <button className="white-btn">7</button>
            <button className="white-btn">8</button>
            <button className="white-btn">9</button>
            <button className="blue-btn">x</button>

            <button className="white-btn">4</button>
            <button className="white-btn">5</button>
            <button className="white-btn">6</button>
            <button className="blue-btn">-</button>

            <button className="white-btn">1</button>
            <button className="white-btn">2</button>
            <button className="white-btn">3</button>
            <button className="blue-btn">+</button>

            <button className="white-btn">0</button>
            <button className="white-btn">&nbsp;</button>
            <button className="white-btn">.</button>
            <button className="orange-btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
