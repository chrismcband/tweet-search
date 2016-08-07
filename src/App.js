import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(searchText) {
    this.setState({ searchText: searchText });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweet search</h2>
        </div>
        <p className="App-intro">
          Search for a tweet
        </p>
        <Search onChange={this.onSearchChange} searchText={this.state.searchText}/>
      </div>
    );
  }
}

export default App;
