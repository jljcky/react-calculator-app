import React from "react";
import CalculatorButton from "./CalculatorButton";

const CalculatorButtons = (props) => {
  return (
    <div className="calc-buttons">
      <div className="calc-row">
        <CalculatorButton
          label={"7"}
          action={() => {
            props.enterNumber("7");
          }}
        />
        <CalculatorButton
          label={"8"}
          action={() => {
            props.enterNumber("8");
          }}
        />
        <CalculatorButton
          label={"9"}
          action={() => {
            props.enterNumber("9");
          }}
        />
        <CalculatorButton
          label={"+"}
          action={() => {
            props.enterOperation("+");
          }}
        />
      </div>
      <div className="calc-row">
        <CalculatorButton
          label={"4"}
          action={() => {
            props.enterNumber("4");
          }}
        />
        <CalculatorButton
          label={"5"}
          action={() => {
            props.enterNumber("5");
          }}
        />
        <CalculatorButton
          label={"6"}
          action={() => {
            props.enterNumber("6");
          }}
        />
        <CalculatorButton
          label={"-"}
          action={() => {
            props.enterOperation("-");
          }}
        />
      </div>
      <div className="calc-row">
        <CalculatorButton
          label={"1"}
          action={() => {
            props.enterNumber("1");
          }}
        />
        <CalculatorButton
          label={"2"}
          action={() => {
            props.enterNumber("2");
          }}
        />
        <CalculatorButton
          label={"3"}
          action={() => {
            props.enterNumber("3");
          }}
        />
        <CalculatorButton
          label={"*"}
          action={() => {
            props.enterOperation("*");
          }}
        />
      </div>
      <div className="calc-row">
        <CalculatorButton
          label={"."}
          action={() => {
            props.enterNumber(".");
          }}
        />
        <CalculatorButton
          label={"0"}
          action={() => {
            props.enterNumber("0");
          }}
        />
        <CalculatorButton
          label={"C"}
          action={() => {
            props.clear();
          }}
        />
        <CalculatorButton
          label={"/"}
          action={() => {
            props.enterOperation("/");
          }}
        />
      </div>
      <div className="calc-row">
        <CalculatorButton
          label={"="}
          action={() => {
            props.complete();
          }}
        />
      </div>
    </div>
  );
};

export default CalculatorButtons;
