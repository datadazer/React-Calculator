import React, { Component } from 'react';
import update from 'immutability-helper';
import * as math from 'mathjs';

class CalcButton extends Component {
  handleClick(e) {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
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
  calculateOperations() {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 13 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick}
        data-value={this.props.value}
      >
        {this.props.symbol}
      </button>
    )
  }
}

export default CalcButton;