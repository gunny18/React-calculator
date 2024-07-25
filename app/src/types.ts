export type CalculatorState = {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: string;
  overwrite: boolean;
};

export const InitialCalculatorState: CalculatorState = {
  previousOperand: null,
  currentOperand: null,
  operation: "",
  overwrite: false,
};

export type ADD_DIGIT_TYPE = "ADD_DIGIT";

export type CHOOSE_OPERATION_TYPE = "CHOOSE_OPERATION";

export type CLEAR_TYPE = "CLEAR";

export type DELETE_DIGIT_TYPE = "DELETE_DIGIT";

export type EVALUATE_TYPE = "EVALUATE";

type ActionType =
  | ADD_DIGIT_TYPE
  | CHOOSE_OPERATION_TYPE
  | CLEAR_TYPE
  | DELETE_DIGIT_TYPE
  | EVALUATE_TYPE;

export type Action = {
  type: ActionType;
  payload: string | null;
};
