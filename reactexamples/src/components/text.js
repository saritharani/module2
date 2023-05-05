import React from "react";
class Text extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "welcome to components inital page"
    };
  }
  changeText() {
    this.setState({
      text: "This is into the Text Component"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={() => this.changeText()}>Next</button>
      </div>
    );
  }
}

export default Text;
