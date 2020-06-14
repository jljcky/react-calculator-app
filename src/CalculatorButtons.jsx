import React from "react";
import CalculatorButton from "./CalculatorButton";

const CalculatorButtons = (props) => {
  return (
    <div className="calc-buttons">
      <div>
        <CalculatorButton
          label="AC"
          type="modify"
          dim={{ w: 1, h: 1 }}
          action={props.clear}
        />
        <CalculatorButton
          label="+/-"
          type="modify"
          dim={{ w: 1, h: 1 }}
          action={props.clear}
        />
        <CalculatorButton
          type="modify"
          label="%"
          dim={{ w: 1, h: 1 }}
          action={props.clear}
        />
        <CalculatorButton
          type="operation"
          label="/"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterOperation("/");
          }}
        />
      </div>
      <div>
        <CalculatorButton
          label="7"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("7");
          }}
        />
        <CalculatorButton
          label="8"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("8");
          }}
        />
        <CalculatorButton
          label="9"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("9");
          }}
        />
        <CalculatorButton
          label="*"
          type="operation"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterOperation("*");
          }}
        />
      </div>
      <div>
        <CalculatorButton
          label="4"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("4");
          }}
        />
        <CalculatorButton
          label="5"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("5");
          }}
        />
        <CalculatorButton
          label="6"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("6");
          }}
        />
        <CalculatorButton
          label="-"
          type="operation"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterOperation("-");
          }}
        />
      </div>
      <div>
        <CalculatorButton
          label="1"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("1");
          }}
        />
        <CalculatorButton
          label="2"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("2");
          }}
        />
        <CalculatorButton
          label="3"
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber("3");
          }}
        />
        <CalculatorButton
          label="+"
          type="operation"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterOperation("+");
          }}
        />
      </div>
      <div>
        <CalculatorButton
          label="0"
          type="digit"
          dim={{ w: 2, h: 1 }}
          action={() => {
            props.enterNumber("0");
          }}
        />
        <CalculatorButton
          label="."
          type="digit"
          dim={{ w: 1, h: 1 }}
          action={() => {
            props.enterNumber(".");
          }}
        />
        <CalculatorButton
          label="="
          type="operation"
          dim={{ w: 1, h: 1 }}
          action={props.complete}
        />
      </div>
    </div>
  );
};

export default CalculatorButtons;
