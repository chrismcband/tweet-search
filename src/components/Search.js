import React, { Component, PropTypes } from 'react';
import './Search.css';

const propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
};

const defaultProps = {
  searchText: ''
};

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.searchText
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onSubmit(e) {
    this.props.onSearch(this.state.searchText);
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.searchText}
            onChange={this.onChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
