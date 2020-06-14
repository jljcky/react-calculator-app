import React, { Component } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

class Calculator extends Component {
  state = {
    display: "0",
    operation: "",
    operationDisplay: "",
    hasDecimal: false,
    prevNum: 0,
    currentNum: 0,
    hasPrevOp: false,
    waitNewNum: false,
    error: false,
  };

  enterNumber = (d) => {
    let { waitNewNum, display, hasDecimal, prevNum } = this.state;

    if (waitNewNum) {
      waitNewNum = false;
      display = "0";
    }
    if (display === "0") {
      if (d === "0") {
        return;
      } else if (d === ".") {
        display = display.concat(d);
        hasDecimal = true;
      } else {
        display = d;
      }
    } else {
      if (d === ".") {
        if (hasDecimal) {
          return;
        }
        hasDecimal = true;
      }
      display = display.concat(d);
    }
    this.setState({
      waitNewNum: waitNewNum,
      display: display,
      hasDecimal: hasDecimal,
      operationDisplay: "",
    });
  };

  calculate = (firstNum, secondNum, operation) => {
    switch (operation) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        return firstNum;
    }
  };

  complete = () => {
    let { prevNum, operation, display, waitNewNum } = this.state;

    let currentNum = parseFloat(display);

    // if (!hasPrevOp) {
    //   this.setState({
    //     prevNum: currentNum,
    //   });
    //   return;
    // }
    if (waitNewNum) {
      this.setState({
        operation: "",
        operationDisplay: "",
        waitNewNum: false,
        prevNum: currentNum,
      });
      return;
    }

    prevNum = this.calculate(prevNum, currentNum, operation);
    display = prevNum.toString();

    this.setState({
      display: display,
      operation: "",
      operationDisplay: "",
      hasDecimal: false,
      prevNum: prevNum,
      currentNum: currentNum,
      waitNewNum: false,
    });
  };

  enterOperation = (o) => {
    let {
      hasPrevOp,
      prevNum,
      display,
      operation,
      operationDisplay,
      waitNewNum,
      currentNum,
    } = this.state;

    if (!hasPrevOp) {
      hasPrevOp = true;
      prevNum = parseFloat(display);
      operation = o;
      operationDisplay = o;
      waitNewNum = true;
    } else {
      if (waitNewNum) {
        operation = o;
        operationDisplay = o;
      } else {
        currentNum = parseFloat(display);
        prevNum = this.calculate(prevNum, currentNum, operation);
        currentNum = 0;
        waitNewNum = true;
        operation = o;
        operationDisplay = o;
        display = prevNum.toString();
      }
    }
    this.setState({
      hasPrevOp: hasPrevOp,
      prevNum: prevNum,
      display: display,
      operation: operation,
      operationDisplay,
      waitNewNum: waitNewNum,
      currentNum: currentNum,
    });
  };

  clear = () => {
    this.setState({
      display: "0",
      operation: "",
      operationDisplay: "",
      hasDecimal: false,
      prevNum: 0,
      currentNum: 0,
      hasPrevOp: false,
      waitNewNum: false,
      error: false,
    });
  };

  render() {
    return (
      <div className="calc">
        <CalculatorDisplay
          display={this.state.display}
          operationDisplay={this.state.operationDisplay}
        />
        <CalculatorButtons
          enterNumber={this.enterNumber}
          enterOperation={this.enterOperation}
          clear={this.clear}
          complete={this.complete}
        />
      </div>
    );
  }
}

export default Calculator;
