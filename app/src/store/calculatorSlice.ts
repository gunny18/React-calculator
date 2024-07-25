import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalculatorState, DecimalType, DigitType } from "../types";
import { RootState } from "./store";

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
      if (action.payload === "0" && state.currentOperand === "0") {
        return state;
      } else if (
        action.payload === "." &&
        state.currentOperand &&
        state.currentOperand.includes(".")
      )
        return state;
      if (state.currentOperand === null) {
        state.currentOperand = action.payload;
      } else {
        state.currentOperand = `${state.currentOperand}${action.payload}`;
      }
    },
  },
});

export const getPreviousOperand = (state: RootState) =>
  state.calculator.previousOperand;
export const getCurrentOperand = (state: RootState) =>
  state.calculator.currentOperand;
export const getOperation = (state: RootState) => state.calculator.operation;

export const { resetCalculator, addDigit } = calculatorSlice.actions;
export default calculatorSlice.reducer;
