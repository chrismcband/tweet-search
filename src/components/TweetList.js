import React, { PropTypes } from 'react';
import Tweet from './Tweet';

const propTypes = {
  tweets: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired
};

const defaultProps = {
  tweets: []
};

function renderTweets(tweets) {

  tweets.forEach(tweet => {
    let imageSmall;

    if(tweet['entities']['media'] !== undefined){
      console.log(tweet['entities']);
      imageSmall = tweet['entities']['media'][0]['media_url'] + ':small';
      Object.assign(tweet, {imageSmall: imageSmall});
    }

    let link;

    if(/http\S*/.test(tweet['text'])){
      link = tweet['text'].match(/http\S*/g).join('')
    }

    Object.assign(tweet, {link: link})
    tweet['text'] = tweet['text'].replace(/http\S*/g,'')

  })

  return tweets.map(tweet => <Tweet
    tweet={tweet}
    key={tweet.id}
  />);
}

function TweetList(props) {
  return (
    <div className="TweetList">
      {
        props.isSearching ?
        <p className="placeholder">Searching...</p> :
        renderTweets(props.tweets)
      }
    </div>
  );
}

TweetList.propTypes = propTypes;
TweetList.defaultProps = defaultProps;

export default TweetList;
