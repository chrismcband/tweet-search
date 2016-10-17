import React, { PropTypes } from 'react';
import Tweet from './Tweet';

const propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  showUserModal: PropTypes.func.isRequired
};

const defaultProps = {
  tweets: []
};



function renderTweets(tweets, showUserModal) {
  return tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id} showUserModal={showUserModal}/>);
}

function TweetList(props) {

  return (
    <div className="TweetList">
      {
        props.isSearching ?
        <p className="placeholder">Searching...</p> :
        renderTweets(props.tweets, props.showUserModal)
      }
    </div>
  );
}

TweetList.propTypes = propTypes;
TweetList.defaultProps = defaultProps;

export default TweetList;
