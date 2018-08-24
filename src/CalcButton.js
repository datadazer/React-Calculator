import React, { Component } from 'react';

class CalcButton extends Component {
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