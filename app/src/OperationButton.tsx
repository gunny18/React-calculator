import { FC } from "react";
import { Action } from "./types";

interface OperationButtonPropsI {
  dispatch: React.Dispatch<Action>;
  operation: string;
}

const OperationButton: FC<OperationButtonPropsI> = ({
  operation,
  dispatch,
}) => {
  return (
    <button
      onClick={() => dispatch({ type: "CHOOSE_OPERATION", payload: operation })}
    >
      {operation}
    </button>
  );
};

export default OperationButton;
