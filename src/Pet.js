import React from "react";
import { Link } from "@reach/router";

export default class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    const checkIfPhotoIsUndefined = photos[0]
      ? photos[0].value
      : "https://dummyimage.com/600x400/000/ffffff.png&text=No+photo+available";
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={checkIfPhotoIsUndefined} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}
