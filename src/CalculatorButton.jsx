import React from "react";

const CalculatorButton = (props) => {
  return (
    <button
      className="calc-button"
      onClick={() => {
        props.action();
      }}
    >
      {props.label}
    </button>
  );
};

export default CalculatorButton;
