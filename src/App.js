import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopter"),
      React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Husky" }),
      React.createElement(Pet, {
        name: "Biscuit",
        animal: "Cat",
        breed: "Street"
      }),
      React.createElement(Pet, {
        name: "Blackie",
        animal: "Seal",
        breed: "Baikal"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
