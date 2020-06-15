import React, { Component } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";

class Calculator extends Component {
  state = {
    display: "0",
    operation: "",
    operatorSelected: false,
    prevNum: 0,
    currentNum: 0,
    hasDecimal: false,
    nextNum: false,
    startedNum: false,
    startedOp: false,
    error: false,
    length: 9,
  };

  enterNumber = (d) => {
    if (this.state.display.length > 9) return;

    let { nextNum, display, hasDecimal, prevNum } = this.state;
    if (nextNum || !this.state.startedNum) {
      prevNum = 0;
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
      nextNum: false,
      display: display,
      hasDecimal: hasDecimal,
      operatorSelected: false,
      startedNum: true,
    });
  };

  enterOperation = (o) => {
    let {
      startedOp,
      prevNum,
      display,
      operation,
      nextNum,
      currentNum,
    } = this.state;

    // fix this plz
    if (!startedOp) {
      prevNum = display.toString().substring(0, this.state.length);
    } else if (!nextNum) {
      currentNum = parseFloat(display);
      prevNum = this.calculate(prevNum, currentNum, operation);
      display = prevNum.toString().substring(0, this.state.length);
      currentNum = 0;
    }
    this.setState({
      startedOp: true,
      prevNum: prevNum,
      display: display,
      operation: o,
      operatorSelected: true,
      nextNum: true,
      currentNum: currentNum,
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
    let { prevNum, operation, display, nextNum } = this.state;
    let currentNum = parseFloat(display);

    if (!this.state.startedNum || !this.state.startedOp) {
      this.setState({
        prevNum: currentNum,
      });
      return;
    }
    if (nextNum) {
      this.setState({
        operation: "",
        nextNum: false,
        prevNum: currentNum,
      });
      return;
    }
    prevNum = this.calculate(prevNum, currentNum, operation);
    display = prevNum.toString().substring(0, this.state.length);

    this.setState({
      display: display,
      operation: "",
      operationDisplay: "",
      hasDecimal: false,
      prevNum: prevNum,
      currentNum: currentNum,
      nextNum: false,
      startedNum: false,
      startedOp: false,
      operatorSelected: false,
    });
  };

  clear = () => {
    this.setState({
      display: "0",
      operation: "",
      hasDecimal: false,
      prevNum: 0,
      currentNum: 0,
      startedNum: false,
      startedOp: false,
      nextNum: false,
      error: false,
    });
  };

  negate = () => {
    // negates the number
    let { display, prevNum } = this.state;
    prevNum = parseFloat(display);
    prevNum *= -1;
    this.setState({
      display: prevNum.toString().substring(0, this.state.length),
      prevNum: prevNum,
    });
  };

  percent = () => {
    // sets number to percentage
    let { display, prevNum } = this.state;
    prevNum = parseFloat(display);
    prevNum *= 0.01;
    this.setState({
      display: prevNum.toString().substring(0, this.state.length),
      prevNum: prevNum,
    });
  };

  render() {
    return (
      <div className="calc">
        <CalculatorDisplay display={this.state.display} />
        <CalculatorButtons
          {...this.state}
          enterNumber={this.enterNumber}
          enterOperation={this.enterOperation}
          clear={this.clear}
          complete={this.complete}
          negate={this.negate}
          percent={this.percent}
        />
      </div>
    );
  }
}

export default Calculator;
