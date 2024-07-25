export type OperationType = "*" | "+" | "-" | "÷";

export type DecimalType = ".";

export type DigitType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

export type CalculatorState = {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: OperationType | null;
  overwrite: boolean;
};
