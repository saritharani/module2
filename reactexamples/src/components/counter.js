import React from "react";
class Counter extends React.Component {
  state = {
    title: "Counter value",
    value: 0
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-success">{this.state.title}</h2>
        <button className="btn btn-success m-2" onClick={this.handleIncrement}>
          +
        </button>
        <span>{this.state.value}</span>
        <button className="btn btn-danger m-2" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
  handleIncrement = () => {
    console.log("increment called");
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    console.log("decrement called");
    this.setState({ value: this.state.value - 1 });
  };
}

export default Counter;
