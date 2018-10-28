import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";
export default class SearchBox extends React.Component {
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <label htmlFor="location">
              Location
              <input
                onChange={this.handleLocationChange}
                id="location"
                value={this.state.location}
                placeholder="Location"
              />
            </label>
            <label htmlFor="animal">
              Animal
              <select
                id="animal"
                value={this.state.animal}
                onChange={this.handleAnimalChange}
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
            <label htmlFor="breed">
              Breed
              <select
                id="breed"
                value={this.state.breed}
                onChange={this.handleBreedChange}
                onBlur={this.handleBreedChange}
                disabled={!this.state.breeds.length}
              >
                <option />
                {this.state.breeds.map(breed => (
                  <option key={breed} value={breed} />
                ))}
              </select>
            </label>
          </div>
         )}
      </Consumer>
    );
  }
}
