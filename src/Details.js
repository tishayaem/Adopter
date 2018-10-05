import React from "react";
import pf from "petfinder-client";
import Carousel from "./Carousel";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class Details extends React.Component {
    state = {
      loading: true
    };
  

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed = pet.breeds.breed;

        this.setState({
          loading: false,
          name: pet.name,
          animal: pet.animal,
          location: pet.contact.city,
          description: pet.description,
          media: pet.media,
          breed
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading</h1>;
    }
    const { name, animal, location, description, media, breed } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal}-{breed}-{location}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    );
    }
}
