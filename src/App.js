import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import TweetList from './components/TweetList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTweets } from './actions';
import { searchedTweets } from './selectors';

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
          searchText={this.props.searchText}
        />

        <div className="search-results">
          {
            this.props.searchText ?
            <TweetList tweets={this.props.tweets} /> :
            <p className="placeholder">Nothing to show yet, try a search</p>
          }
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tweets: searchedTweets(state),
    searchText: state.search.searchText
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ fetchTweets }, dispatch);
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
