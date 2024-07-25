import { FC } from "react";

interface OperationButtonPropsI {
  operation: string;
}

const OperationButton: FC<OperationButtonPropsI> = ({ operation }) => {
  return <button>{operation}</button>;
};

export default OperationButton;
