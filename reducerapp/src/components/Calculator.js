import React, { Component } from 'react';
import '.././App.css';
import ActionButton from './ActionButton'
import NumberButton from './NumberButton'

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="input">
         <div/>
        </div>

        <div className = "mainPart">

          <div className= "row40">
            <div className = "col75">
              <div className = "col33" ><ActionButton symbol = "c"/></div>
              <div className = "col33"><ActionButton symbol = "/"/></div>
              <div className = "col33"><ActionButton symbol = "*"/></div>
              <div className = "col33"><NumberButton symbol = "7"/></div>
              <div className = "col33"><NumberButton symbol = "8"/></div>
              <div className = "col33"><NumberButton symbol = "9"/></div>
            </div>
            <div className = "col25"> <ActionButton symbol = "-"/></div>
          </div>

          <div className= "row40">
            <div className = "col75">
              <div className = "col33"><NumberButton symbol = "4"/></div>
              <div className = "col33"><NumberButton symbol = "5"/></div>
              <div className = "col33"><NumberButton symbol = "6"/></div>
              <div className = "col33"><NumberButton symbol = "1"/></div>
              <div className = "col33"><NumberButton symbol = "2"/></div>
              <div className = "col33"><NumberButton symbol = "3"/></div>
            </div>
            <div className = "col25"> <ActionButton symbol = "+"/></div>
          </div>
          

          <div className= "row20">
        
             <div className = "col25"> <NumberButton symbol = "."/></div>              
             <div className = "col25"> <NumberButton symbol = "0"/></div>
            <div className = "col50"> <ActionButton symbol = "="/></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;