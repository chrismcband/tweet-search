import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchTabs from './components/SearchTabs';
import TweetList from './components/TweetList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchForTweetsRequested, setActiveSearch } from './actions';
import { searchedTweets, searchesAsArray } from './selectors';

class App extends Component {

  renderError() {
    return (
      <p className="error">{this.props.error}</p>
    );
  }

  renderSearchResults() {
    if (this.props.activeSearch) {
      return (
        <TweetList
          tweets={this.props.tweets}
          isSearching={this.props.isSearching}
        />
      );
    } else {
      return (
        <p className="placeholder">Nothing to show yet, try a search</p>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweet search</h2>
        </div>
        <p className="App-intro">
          Search for tweets and see the results appear below.
        </p>
        <Search
          onSearch={this.props.searchForTweetsRequested}
          searchText={this.props.activeSearch}
        />

        <SearchTabs
          searches={this.props.searches}
          activeSearch={this.props.activeSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <div className="search-results">
          {this.props.error ? this.renderError() : this.renderSearchResults()}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const search = state.searches.searches[state.searches.activeSearch];
  let isSearching = search && search.isSearching;

  return {
    tweets: searchedTweets(state),
    activeSearch: state.searches.activeSearch,
    error: state.searches.error,
    isSearching,
    searches: searchesAsArray(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    { searchForTweetsRequested, setActiveSearch },
    dispatch
  );
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
