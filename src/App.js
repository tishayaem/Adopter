/* global React ReactDOM */
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
