import React from "react";

const CalculatorButton = (props) => {
  let operation = "";
  if (
    props.type === "operation" &&
    props.operation === props.label &&
    props.operatorSelected
  ) {
    operation = " selected";
  }
  return (
    <button
      className={"calc-button " + props.type + operation}
      onClick={() => {
        props.action();
      }}
      style={{
        margin: 5,
        width: props.dim.w * 100 + 10 * (props.dim.w - 1),
        height: props.dim.h * 100 + 10 * (props.dim.h - 1),
      }}
    >
      {props.label}
    </button>
  );
};

export default CalculatorButton;
