import React from "react";

const CalculatorDisplay = (props) => {
  return (
    <div className="calc-display">
      <span className="display-text">{props.display}</span>
    </div>
  );
};

export default CalculatorDisplay;
