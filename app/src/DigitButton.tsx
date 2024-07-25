import { FC } from "react";
import { Action } from "./types";

interface DigitButtonPropsI {
  dispatch: React.Dispatch<Action>;
  digit: string;
}

const DigitButton: FC<DigitButtonPropsI> = ({ digit, dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: "ADD_DIGIT", payload: digit })}>
      {digit}
    </button>
  );
};

export default DigitButton;
