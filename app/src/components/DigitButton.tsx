import { FC } from "react";

interface DigitButtonPropsI {
  digit: string;
}

const DigitButton: FC<DigitButtonPropsI> = ({ digit }) => {
  return <button>{digit}</button>;
};

export default DigitButton;
