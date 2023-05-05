import React from "react";

class ListFlowers extends React.Component {
  state = {
    title: "List of flowers through map",
    allList: ["rose", "jasmin", "lilly", "jujubi"]
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3 className="text-primary">{this.state.title}</h3>
          <ul className="list-group">{this.renderAllFlowers()}</ul>
        </div>
      </React.Fragment>
    );
  }
  renderAllFlowers() {
    return this.state.allList.map(eachFlower => (
      <li className="list-group-item" key={eachFlower}>
        {eachFlower}
      </li>
    ));
  }
}

export default ListFlowers;
