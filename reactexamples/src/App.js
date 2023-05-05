import React from "react";
import "./App.css";
import Text from "./components/text";
import Display from "./components/display";
import ListFlowers from "./components/listFlowers";
import Counter from "./components/counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Text></Text>
        <Display></Display>
        <ListFlowers></ListFlowers>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
