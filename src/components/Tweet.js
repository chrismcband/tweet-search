import React, { PropTypes } from 'react';
import TweetAuthor from './TweetAuthor';
import './Tweet.css';

const propTypes = {
  tweet: PropTypes.object.isRequired
};

function modifyImageLinkEnding(imageLink){
  if(imageLink) {
    return imageLink.replace(':small', ':large')
  } else {
    return imageLink
  }
}

function Tweet(props) {
  return (
    <div className="Tweet">
      <TweetAuthor user={props.tweet.user} />

      <div className="Tweet__message">
        <a href={modifyImageLinkEnding(props.tweet.imageSmall)} target='_blank'><img className="Tweet_image" src={props.tweet.imageSmall}></img></a>
        <p className="Tweet_text">{props.tweet.text}</p>
        <a href={props.tweet.link} target="_blank">{props.tweet.link}</a>
      </div>
    </div>
  )
}

Tweet.propTypes = propTypes;

export default Tweet;
