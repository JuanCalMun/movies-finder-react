import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DEFAULT_POSTER =
  "https://media.comicbook.com/files/img/default-movie.png";

export class Movie extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    defaultPoster: PropTypes.string
  };
  render() {
    const { id, poster, title, year } = this.props;
    return (
      <Link to={`/detail/${id}`} className="card">
        <div className="card-image">
          <figure className="image">
            <img src={poster !== "N/A" ? poster : DEFAULT_POSTER} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{title}</p>
              <p className="subtitle is-6">{year}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
