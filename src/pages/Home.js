import React from "react";
import Title from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MovieLists } from "../components/MoviesList";

export class Home extends React.Component {
  state = { results: [], usedSearch: false };

  _handleResults = results => {
    this.setState({ results, usedSearch: true });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      <p>sorry, no results 😢</p>
    ) : (
      <MovieLists movies={this.state.results} />
    );
  }

  render() {
    return (
      <div>
        <Title>🎞 Search Movies 🎞</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <small>find film</small>
        )}
      </div>
    );
  }
}
