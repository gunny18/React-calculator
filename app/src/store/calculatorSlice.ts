import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CalculatorState,
  DecimalType,
  DigitType,
  OperationType,
} from "../types";
import { RootState } from "./store";

const evaluate = (state: CalculatorState) => {
  const prev = state.previousOperand;
  const curr = state.currentOperand;
  const operation = state.operation;
  let result: number | null = null;
  if (prev && curr && operation) {
    const prevNum = parseFloat(prev);
    const currNum = parseFloat(curr);
    switch (operation) {
      case "+":
        result = prevNum + currNum;
        break;
      case "-":
        result = prevNum - currNum;
        break;
      case "*":
        result = prevNum * currNum;
        break;
      case "÷":
        result = prevNum / currNum;
        break;
    }
  }
  const properResult = result ? String(result) : null;
  return properResult;
};

const initialState: CalculatorState = {
  previousOperand: null,
  currentOperand: null,
  operation: null,
  overwrite: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    resetCalculator: () => {
      return initialState;
    },
    addDigit: (state, action: PayloadAction<DigitType | DecimalType>) => {
      if (state.overwrite) {
        state.currentOperand = action.payload;
        state.overwrite = false;
      } else if (action.payload === "0" && state.currentOperand === "0") {
        return state;
      } else if (
        action.payload === "." &&
        state.currentOperand &&
        state.currentOperand.includes(".")
      )
        return state;
      else if (state.currentOperand === null) {
        state.currentOperand = action.payload;
      } else {
        state.currentOperand = `${state.currentOperand}${action.payload}`;
      }
    },
    addOperator: (state, action: PayloadAction<OperationType>) => {
      if (state.currentOperand === null && state.previousOperand === null)
        return state;
      if (state.currentOperand && state.previousOperand && state.operation) {
        return {
          ...state,
          previousOperand: evaluate(state),
          currentOperand: null,
          operation: action.payload,
        };
      }
      //   case when curr operand is typed and then operation is clicked
      state.operation = action.payload;
      state.previousOperand = state.currentOperand;
      state.currentOperand = null;
    },
    evaluateResult: (state) => {
      if (state.currentOperand && state.previousOperand && state.operation) {
        state.currentOperand = evaluate(state);
        state.previousOperand = null;
        state.operation = null;
        state.overwrite = true;
      }
    },
    deleteDigit: (state) => {
      if (state.currentOperand) {
        if (state.currentOperand.length === 1) state.currentOperand = null;
        else state.currentOperand = state.currentOperand.slice(0, -1);
      }
    },
  },
});

export const getPreviousOperand = (state: RootState) =>
  state.calculator.previousOperand;
export const getCurrentOperand = (state: RootState) =>
  state.calculator.currentOperand;
export const getOperation = (state: RootState) => state.calculator.operation;

export const {
  resetCalculator,
  addDigit,
  addOperator,
  evaluateResult,
  deleteDigit,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
