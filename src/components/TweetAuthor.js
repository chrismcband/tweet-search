import React, { PropTypes } from 'react';
import './TweetAuthor.css';

function TweetAuthor(props) {
  return (
    <div className="TweetAuthor">
      <div className="TweetAuthor__avatar">
        <img
          src={props.user.profile_image_url}
          alt={`Profile photo for ${props.user.screen_name}`}
        />
      </div>
      <div className="TweetAuthor__name_container">
        <div className="TweetAuthor__name">{props.user.name}</div>
        <span className="TweetAuthor__screen_name">{props.user.screen_name}</span>
      </div>

    </div>
  )
}

export default TweetAuthor;
