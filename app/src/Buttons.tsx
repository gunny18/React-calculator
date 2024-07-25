import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

const Buttons = () => {
  return (
    <>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="÷" />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton operation="*" />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton operation="+" />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton operation="-" />
      <DigitButton digit="." />
      <DigitButton digit="0" />
      <button className="span-two">=</button>
    </>
  );
};

export default Buttons;
