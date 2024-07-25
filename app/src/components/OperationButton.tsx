import { FC } from "react";
import { OperationType } from "../types";
import { useAppDispatch } from "../store/hooks";
import { addOperator } from "../store/calculatorSlice";

interface OperationButtonPropsI {
  operation: OperationType;
}

const OperationButton: FC<OperationButtonPropsI> = ({ operation }) => {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(addOperator(operation))}>
      {operation}
    </button>
  );
};

export default OperationButton;
