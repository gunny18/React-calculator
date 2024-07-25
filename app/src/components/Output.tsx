import { useAppSelector } from "../store/hooks";
import {
  getCurrentOperand,
  getOperation,
  getPreviousOperand,
} from "../store/calculatorSlice";

const Output = () => {
  const curr = useAppSelector(getCurrentOperand);
  const ops = useAppSelector(getOperation);
  const prev = useAppSelector(getPreviousOperand);
  return (
    <div className="output">
      {prev && (
        <div className="previous-operand">
          {prev}
          {ops}
        </div>
      )}
      {curr && <div className="current-operand">{curr}</div>}
    </div>
  );
};

export default Output;
