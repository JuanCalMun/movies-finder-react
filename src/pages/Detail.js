import React from "react";
import PropTypes from "prop-types";
import { ButtonBackToHome } from "../components/ButtonBackToHome";

const API_KEY = "fbd2ba1f";

export class Detail extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string
      })
    })
  };

  state = { movie: {} };

  _fetchMovie(id) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie });
      });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._fetchMovie(id);
  }

  render() {
    const {
      Actors,
      Director,
      imdbRating,
      Metascore,
      Plot,
      Poster,
      Title
    } = this.state.movie;
    return (
      <div className="Detail-wrapper">
        <ButtonBackToHome />
        <div className="DetailMovie-wrapper">
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={Poster} alt={Title} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">Director: {Director}</p>
                  <p className="subtitle is-6">
                    Cast & Crew <br /> {Actors}
                  </p>
                </div>
              </div>

              <div className="content">
                Plot: <br />
                {Plot}
              </div>
              <span>
                {Metascore !== "N/A"
                  ? "metacritic:" + Metascore
                  : "No Metacritic rate"}
                <br />
                {imdbRating !== "N/A" ? "Imdb: " + imdbRating : "No Imdb rate"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
