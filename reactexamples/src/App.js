import React from "react";
import "./App.css";
import Text from "./components/text";
import Display from "./components/display";
import ListFlowers from "./components/listFlowers";
import Counter from "./components/counter";
import TableForm from "./components/displayTable";

class App extends React.Component {
  render() {
    return (
      <div>
        <Text></Text>
        <Display></Display>
        <ListFlowers></ListFlowers>
        <Counter></Counter>
        <TableForm></TableForm>
      </div>
    );
  }
}

export default App;
