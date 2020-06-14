import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <div className="calc-display">
      <span className="display-text">{props.display}</span>
      <h3>{props.operationDisplay}</h3>
    </div>
  );
};

export default CalculatorDisplay;
