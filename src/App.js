import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SearchTabs from './components/SearchTabs';
import TweetList from './components/TweetList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTweets, setActiveSearch } from './actions';
import { searchedTweets, searchesAsArray } from './selectors';

class App extends Component {
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
          onSearch={this.props.fetchTweets}
          searchText={this.props.activeSearch}
        />

        <SearchTabs
          searches={this.props.searches}
          activeSearch={this.props.activeSearch}
          onClickTab={this.props.setActiveSearch}
        />

        <div className="search-results">
          {
            this.props.activeSearch ?
            <TweetList
              tweets={this.props.tweets}
              isSearching={this.props.isSearching}
            /> :
            <p className="placeholder">Nothing to show yet, try a search</p>
          }
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
    isSearching,
    searches: searchesAsArray(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ fetchTweets, setActiveSearch }, dispatch);
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
