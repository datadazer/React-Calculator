import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div class="calculator">
          <div class="display">test</div>
          <div class="input-section">
            <button class="grey-btn">C</button>
            <button class="grey-btn">+/-</button>
            <button class="grey-btn">%</button>
            <button class="blue-btn">÷</button>

            <button class="white-btn">7</button>
            <button class="white-btn">8</button>
            <button class="white-btn">9</button>
            <button class="blue-btn">x</button>

            <button class="white-btn">4</button>
            <button class="white-btn">5</button>
            <button class="white-btn">6</button>
            <button class="blue-btn">-</button>

            <button class="white-btn">1</button>
            <button class="white-btn">2</button>
            <button class="white-btn">3</button>
            <button class="blue-btn">+</button>

            <button class="white-btn">0</button>
            <button class="white-btn">&nbsp;</button>
            <button class="white-btn">.</button>
            <button class="orange-btn">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
