import Buttons from "./Buttons";
import "./App.css";
import { Action, CalculatorState, InitialCalculatorState } from "./types";
import { useReducer } from "react";

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formatOperand(operand: string | null) {
  if (operand === null) return;
  const [integer, decimal] = operand.split(".");
  if (!decimal) return String(INTEGER_FORMATTER.format(parseInt(integer)));
  return `${INTEGER_FORMATTER.format(parseInt(integer))}.${decimal}`;
}

const calculatorReducer = (
  state: CalculatorState,
  action: Action
): CalculatorState => {
  switch (action.type) {
    case "ADD_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: action.payload,
          overwrite: false,
        };
      }
      if (
        action.payload === "0" &&
        state.currentOperand &&
        state.currentOperand === "0"
      ) {
        return state;
      }
      if (
        action.payload === "." &&
        state.currentOperand &&
        state.currentOperand.includes(".")
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand ?? ""}${action.payload ?? ""}`,
      };
    case "CLEAR":
      return InitialCalculatorState;
    case "CHOOSE_OPERATION":
      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }
      if (state.currentOperand === null) {
        return {
          ...state,
          operation: action.payload as string,
        };
      }
      if (state.previousOperand === null) {
        return {
          ...state,
          operation: action.payload as string,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: null,
        operation: action.payload as string,
      };
    case "DELETE_DIGIT":
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }
      if (state.currentOperand === null) return state;
      if (state.currentOperand && state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null,
        };
      }
      return {
        ...state,
        currentOperand:
          state.currentOperand && state.currentOperand.slice(0, -1),
      };
    case "EVALUATE":
      if (
        state.currentOperand === null ||
        state.previousOperand === null ||
        state.operation === null
      )
        return state;
      return {
        ...state,
        previousOperand: null,
        overwrite: true,
        operation: "",
        currentOperand: evaluate(state),
      };
    default:
      return state;
  }
};

const evaluate = (calcState: CalculatorState) => {
  const prev = parseFloat(calcState.previousOperand ?? "");
  const curr = parseFloat(calcState.currentOperand ?? "");
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation: number | string = "";
  switch (calcState.operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "*":
      computation = prev * curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
  }
  return String(computation);
};

const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    InitialCalculatorState
  );
  return (
    <section className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(previousOperand)}
          {operation}
        </div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <Buttons dispatch={dispatch} />
    </section>
  );
};

export default App;
