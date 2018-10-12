import React from 'react';

export default class SearchParams extends React.Component {
    state = {
        location: "New York, NY",
        animal: "",
        breed: ""
    }
    render () {
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
            </div>
        )
    }
}