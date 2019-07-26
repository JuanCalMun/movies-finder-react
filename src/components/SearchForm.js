/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const API_KEY = "fbd2ba1f";

export class SearchForm extends React.Component {
  state = {
    inputMovie: ""
  };

  _handleChange = e => {
    this.setState({ inputMovie: e.target.value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(movies => {
        const { Search = [], totalResults = 0 } = movies;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              placeholder="Movie to search..."
              type="text"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search Movies</button>
          </div>
        </div>
      </form>
    );
  }
}
