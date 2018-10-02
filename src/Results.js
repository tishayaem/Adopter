import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

export default class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = { pets: [] };
    }

    componentDidMount() {
        petfinder.pet
            .find({ output: "full", location: "Los Angeles, Ca" })
            .then(data => {
                let pets;

                if (data.petfinder.pets && data.petfinder.pets.pet) {
                    if (Array.isArray(data.petfinder.pets.pet)) {
                        pets = data.petfinder.pets.pet;
                    } else {
                        pets = [data.petfinder.pets.pet];
                    }
                } else {
                    pets = [];
                }
                this.setState({ pets });
            });
    }
    render() {
        return (
                <div>
                    {this.state.pets.map(pet => {
                        return (
                            <Pet
                                key={pet.id}
                                animal={pet.animal}
                                name={pet.name}
                                breed={pet.breeds.breed}
                                media={pet.media}
                                location={pet.contact.city}
                            />
                        );
                    })}
                </div>
        );
    }
}

