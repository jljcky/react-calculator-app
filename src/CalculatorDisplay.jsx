import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <div className="calc-display">
      <h3>{props.prevDisplay}</h3>
      <h1>{props.display}</h1>
      <h3>{props.operationDisplay}</h3>
    </div>
  );
};

export default CalculatorDisplay;
