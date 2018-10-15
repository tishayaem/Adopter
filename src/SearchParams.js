import React from "react";
import { ANIMALS } from "petfinder-client";

export default class SearchParams extends React.Component {
  state = {
    location: "New York, NY",
    animal: "",
    breed: ""
  };
  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.state.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}
