import './App.css';
import {useReducer} from "React"

const Actions ={
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR_FUNCTION: "clear-function",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

function reducer(state,{type,payload}) {
  // eslint-disable-next-line default-case
  switch(type) {

    case Actions.ADD_DIGIT:
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


const Int1 = 199; // erase me later! I make line 35 happy for now!
const INTEGER_FORMATTER = new Int1.NumberFormat("en-us", {maximumfractionDigits: 0})

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
        <button className="two-span">clear</button>
        <button className="two-span">delete</button>
        <button className="one-span">/</button>
        <button className="one-span">1</button>
        <button className="one-span">2</button>
        <button className="one-span">3</button>
        <button className="one-span">*</button>
        <button className="one-span">4</button>
        <button className="one-span">5</button>
        <button className="one-span">6</button>
        <button className="one-span">+</button>
        <button className="one-span">7</button>
        <button className="one-span">8</button>
        <button className="one-span">9</button>
        <button className="one-span">-</button>
        <button className="one-span">0</button>
        <button className="one-span">.</button>
        <button className="two-span">=</button>
      </div>
    </div>

    </body>
  );
}

export default App;
