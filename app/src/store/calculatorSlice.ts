import { createSlice } from "@reduxjs/toolkit";
import { CalculatorState } from "../types";
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
  reducers: {},
});

export const getPreviousOperand = (state: RootState) =>
  state.calculator.previousOperand;
export const getCurrentOperand = (state: RootState) =>
  state.calculator.currentOperand;
export const getOperation = (state: RootState) => state.calculator.operation;

export default calculatorSlice.reducer;
