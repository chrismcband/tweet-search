import React, { PropTypes } from 'react';
// import './style/ModalContent.css';

const propTypes = {
  user: PropTypes.object.isRequired,
};

function ModalContent(props) {
  const user = props.user
  return (
    <div className="modal-display">
      <img className="banner" src={user.profile_banner_url}/>
      <div className="flex user-elements">
        <img className="avatar" src={user.profile_image_url_https.replace('normal', 'bigger')}/>
        <div className="info user-name-location">
          <h4>{user.name}</h4>
          <h5>{user.screen_name}</h5>
          <h6>{user.location}</h6>
        </div>
        <div className="info stats">
          <p className="stats-title">FRIENDS</p>
          <span>{user.friends_count}</span>
        </div>
        <div className="info stats">
          <p className="stats-title">FOLLOWERS</p>
          <span>{user.followers_count}</span>
        </div>
        <div className="info stats">
          <p className="stats-title">STATUSES</p>
          <span>{user.statuses_count}</span>
        </div>
      </div>
      <p className="description">{user.description}</p>
    </div>
  );
}

ModalContent.propTypes = propTypes;

export default ModalContent;
