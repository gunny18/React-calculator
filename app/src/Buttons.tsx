import { FC } from "react";
import { Action } from "./types";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

interface ButtonsPropsI {
  dispatch: React.Dispatch<Action>;
}

const Buttons: FC<ButtonsPropsI> = ({ dispatch }) => {
  return (
    <>
      <button
        className="span-two"
        onClick={() => dispatch({ type: "CLEAR", payload: null })}
      >
        AC
      </button>
      <button onClick={() => dispatch({ type: "DELETE_DIGIT", payload: null })}>
        DEL
      </button>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button
        className="span-two"
        onClick={() => dispatch({ type: "EVALUATE", payload: null })}
      >
        =
      </button>
    </>
  );
};

export default Buttons;
