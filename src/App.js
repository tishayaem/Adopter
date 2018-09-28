import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopter</h1>
        <Pet name="Luna" animal="Dog" breed="Husky" />
        <Pet name="Biscuit" animal="Cat" breed="Street" />
        <Pet name="Ed" animal="Seal" breed="Blackanese" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
