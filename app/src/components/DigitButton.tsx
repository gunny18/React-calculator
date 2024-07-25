import { ButtonHTMLAttributes, FC } from "react";
import { useAppDispatch } from "../store/hooks";
import { addDigit } from "../store/calculatorSlice";
import { DecimalType, DigitType } from "../types";

interface DigitButtonPropsI extends ButtonHTMLAttributes<HTMLButtonElement> {
  digit: DigitType | DecimalType;
}

const DigitButton: FC<DigitButtonPropsI> = ({ digit }) => {
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(addDigit(digit))}>{digit}</button>;
};

export default DigitButton;
