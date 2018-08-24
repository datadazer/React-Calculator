import React, { Component } from 'react';

class Display extends Component {
  render() {
    const string = this.props.data.join('')
    return <span className="display-content">{string}</span>
  }
}

export default Display;