import React, { Component } from 'react';
import './App.css';
import CalcButton from './CalcButton';
import Display from './Display';
import update from 'immutability-helper';
import * as math from 'mathjs';

class App extends Component {
  constructor() {
    super();
    this.state = { operations: [] }
  }
  handleClick = (e) => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations();
        break
      case '%':
        this.calculatePercentage();
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  }
  calculatePercentage = () => {
    let result = this.state.operations.join('');
    if(result) {
      result = result + "/100";
      this.evaluateAndFormat(result);
    }
  }
  calculateOperations = () => {
    let result = this.state.operations.join('');
    if(result) {
      if(result.indexOf("√") > -1) {
        result = result.replace("√", "sqrt(");
        result = result + ")";
      }
      this.evaluateAndFormat(result);
    }
  }
  evaluateAndFormat = (result) => {
    result = math.eval(result);
    result = math.format(result, { precision: 13 })
    result = String(result)

    this.setState({
      operations: [result]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <div className="calculator">
          <div className="display">
            <Display data={this.state.operations}/>
          </div>
          <div className="input-section">
            <CalcButton onClick={this.handleClick} className="grey-btn" value="clear" symbol="C"/>
            <CalcButton onClick={this.handleClick} className="grey-btn" value="√" symbol="√"/>
            <CalcButton onClick={this.handleClick} className="grey-btn" value="%" symbol="%"/>
            <CalcButton onClick={this.handleClick} className="blue-btn" value="/" symbol="÷"/>

            <CalcButton onClick={this.handleClick} className="white-btn" value="7" symbol="7"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="8" symbol="8"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="9" symbol="9"/>
            <CalcButton onClick={this.handleClick} className="blue-btn" value="*" symbol="x"/>

            <CalcButton onClick={this.handleClick} className="white-btn" value="4" symbol="4"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="5" symbol="5"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="6" symbol="6"/>
            <CalcButton onClick={this.handleClick} className="blue-btn" value="-" symbol="-"/>

            <CalcButton onClick={this.handleClick} className="white-btn" value="1" symbol="1"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="2" symbol="2"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="3" symbol="3"/>
            <CalcButton onClick={this.handleClick} className="blue-btn" value="+" symbol="+"/>

            <CalcButton onClick={this.handleClick} className="white-btn" value="0" symbol="0"/>
            <CalcButton role="none" className="white-btn" value="null" symbol="&nbsp;"/>
            <CalcButton onClick={this.handleClick} className="white-btn" value="." symbol="."/>
            <CalcButton onClick={this.handleClick} className="orange-btn" value="equal" symbol="="/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
