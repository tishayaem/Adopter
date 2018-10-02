import React from "react";
import {render} from "react-dom";
import Results from "./Results";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Adopter</div>
        <Results />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
