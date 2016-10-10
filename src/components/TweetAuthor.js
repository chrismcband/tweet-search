import React, { PropTypes } from 'react';
// import './style/TweetAuthor.css';

const propTypes = {
  user: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired
}

function TweetAuthor(props) {
  function onClick(){
    props.showModal(props.user)
  }
  return (
    <div className="TweetAuthor">
      <div className="TweetAuthor__avatar">
        <img className="avatar"
          src={props.user.profile_image_url}
          alt={`Avatar for ${props.user.screen_name}`}
          onClick={onClick}
          />
      </div>
      <div className="TweetAuthor__name_container">
        <p className="TweetAuthor__name" onClick={onClick}>{props.user.name}</p>
        <span className="TweetAuthor__screen_name" onClick={onClick}>{props.user.screen_name}</span>
      </div>

    </div>
  )
}

TweetAuthor.propTypes = propTypes;

export default TweetAuthor;
