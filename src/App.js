import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import TweetList from './components/TweetList';
import API from './Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '', tweets: [] };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(searchText) {
    const _this = this;
    this.setState({ searchText: searchText });
    API.search(searchText).then(function (tweets){
      console.log("Found these tweets: ", tweets);
      _this.setState({ tweets });
    });
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
        <Search onSearch={this.onSearch} />

        <div className="search-results">
          {
            this.state.searchText ?
            <TweetList tweets={this.state.tweets} /> :
            <p className="placeholder">Nothing to show yet, try a search</p>
          }
        </div>

      </div>
    );
  }
}

export default App;
