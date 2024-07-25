type OperationType = "*" | "+" | "-" | "÷";

export type CalculatorState = {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: OperationType | null;
  overwrite: boolean;
};


