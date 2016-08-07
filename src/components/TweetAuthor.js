import React, { PropTypes } from 'react';
import './TweetAuthor.css';

const propTypes = {
  user: PropTypes.object.isRequired
}

function TweetAuthor(props) {
  return (
    <div className="TweetAuthor">
      <div className="TweetAuthor__avatar">
        <img
          src={props.user.profile_image_url}
          alt={`Avatar for ${props.user.screen_name}`}
        />
      </div>
      <div className="TweetAuthor__name_container">
        <div className="TweetAuthor__name">{props.user.name}</div>
        <span className="TweetAuthor__screen_name">{props.user.screen_name}</span>
      </div>

    </div>
  )
}

TweetAuthor.propTypes = propTypes;

export default TweetAuthor;
