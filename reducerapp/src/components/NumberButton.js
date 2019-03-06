import React, { Component } from 'react';
import '../App.css';

class NumberButton extends Component {
  render() {
    return (
      <div className="NumberButton">
        {this.props.symbol}
      </div>
    );
  }
}

export default NumberButton;