import React, { Component } from 'react';
import Button from './Button'
import '.././App.css';



 
class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="input">
        7+3
        </div>

        <div className = "mainPart">

          <div className= "row40">
            <div className = "col75">
              <div className = "col33" ><Button symbol = "c" class = "ActionButton"/></div>
              <div className = "col33"><Button symbol = "/"  class = "ActionButton"/></div>
              <div className = "col33"><Button symbol = "*"  class = "ActionButton"/></div>
              <div className = "col33"><Button symbol = "7"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "8"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "9"  class = "NumberButton"/></div>
            </div>
            <div className = "col25"> <Button symbol = "-" class = "ActionButton"/></div>
          </div>

          <div className= "row40">
            <div className = "col75">
              <div className = "col33"><Button symbol = "4"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "5"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol= "6"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "1"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "2"  class = "NumberButton"/></div>
              <div className = "col33"><Button symbol = "3"  class = "NumberButton"/></div>
            </div>
            <div className = "col25"> <Button symbol = "+"  class = "ActionButton"/></div>
          </div>
          

          <div className= "row20">
        
             <div className = "col25"> <Button symbol = "." class = "NumberButton"/></div>              
             <div className = "col25"> <Button symbol = "0" class = "NumberButton"/></div>
            <div className = "col50"> <Button symbol = "="  class = "ActionButton"/></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;