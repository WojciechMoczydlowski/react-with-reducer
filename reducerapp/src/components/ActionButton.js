import React, { Component } from 'react';
import '../App.css';

class ActionButton extends Component {
  render() {
    return (
      <div className="ActionButton">
        {this.props.symbol}
      </div>
    );
  }
}

export default ActionButton;