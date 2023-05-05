import React from "react";
class Display extends React.Component {
  state = {
    title: "Display component",
    imageUrl: "https://picsum.photos/500/100"
  };
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.imageUrl} alt="imageurl"></img>
        <h2>In Render state</h2>
      </div>
    );
  }
}

export default Display;
