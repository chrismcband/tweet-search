import React, { PropTypes } from 'react';
import TweetAuthor from './TweetAuthor';
import './Tweet.css';

const propTypes = {
  tweet: PropTypes.object.isRequired
};

function Tweet(props) {
  return (
    <div className="Tweet">
      <TweetAuthor user={props.tweet.user} />

      <div className="Tweet__message">
        {props.tweet.text}
      </div>
    </div>
  )
}

Tweet.propTypes = propTypes;

export default Tweet;
