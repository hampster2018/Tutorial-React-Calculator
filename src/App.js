import React from 'react';
import './App.css';
import { useReducer } from "react"
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR_FUNCTION: "clear-function",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

function reducer(state, {type,payload}) {
  // eslint-disable-next-line default-case
  switch(type) {

    case ACTIONS.ADD_DIGIT:
      
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

  }
}



function App() {

  const [{currentOperand, previousOperand, operation}, dispatch ] = useReducer(reducer, { })

  return (
    <body className='grid'>

      <div className="output">
        <div className="previous-operand">
          {previousOperand}{operation}
        </div>

        <div className = "current-operand">
          {currentOperand}
        </div>
        
      </div>
      <button className="two-span">clear</button>
      <button>delete</button>
      <OperationButton operation="/" dispatch={{dispatch}}></OperationButton>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <button className='two-span'>=</button>

    </body>
  );
}

export default App;
