import './App.css';
import {useReducer} from "react"

export const ACTIONS ={
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR_FUNCTION: "clear-function",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

function reducer(state,{type,payload}) {
  // eslint-disable-next-line default-case
  switch(type) {

    case ACTIONS.ADD_DIGIT:
      if(state.overwrite) {
        return{
          ...state,
        currentOperand:payload.digit,
        overwrite:false}
      }
      
      if(payload.digit === "0" && state.currentOperand === "0")
        return state
      
        if(payload.digit === "." && state.currentOperand.includes("."))
        return state
      
        return {
        ...state,
        currentOperand:`${state.currentOperand || ""}${payload.digit}`,
      }

  }
}


const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {maximumfractionDigits: 0})

function formatOperand(operand) {
  if(operand == null) return
  const [Integer, Decimal] = operand.split(".")
  if(Decimal == null) return INTEGER_FORMATTER.format(Integer)
  return `{Integer_Formatter.format(integer)}.{decimal}`
} 

function App() {

const [{currentOperand, previousOperand, operation}, dispatch ] = useReducer(reducer, { })



  return (
    <body>

    <div className="mainCalc">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)}{operation}
        </div>

        <div className = "current-operand">
          {formatOperand(currentOperand)}
        </div>
        

      </div>

      <div className="grid">
        <button className="two-span">CLEAR</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>0</button>
        <button>.</button>
        <button className="two-span">=</button>
      </div>
    </div>

    </body>
  );
}

export default App;
