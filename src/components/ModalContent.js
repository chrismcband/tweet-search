import React, { PropTypes } from 'react';
import './style/ModalContent.css';

const propTypes = {
  user: PropTypes.object.isRequired,
};

function ModalContent(props) {
  const user = props.user;

  return (
    <div className="modal-display" onClick={(e) => {e.stopPropagation();}}>
      <img className="banner" alt="user-banner" src={user.profile_banner_url}/>
      <div className="elements">
        <div className="flex user-elements">
          <img className="avatar" alt="user-avatar"  src={user.profile_image_url_https.replace('normal', 'bigger')}/>
          <div className="info user-name-location">
            <h4 className="name">{user.name}</h4>
            <h5 className="screen-name">{user.screen_name}</h5>
            <h6 className="location">{user.location}</h6>
          </div>
          <div className="info stats">
            <p className="stats-title">FRIENDS</p>
            <span className="stats-figures">{user.friends_count}</span>
          </div>
          <div className="info stats">
            <p className="stats-title">FOLLOWERS</p>
            <span className="stats-figures">{user.followers_count}</span>
          </div>
          <div className="info stats">
            <p className="stats-title">STATUSES</p>
            <span className="stats-figures">{user.statuses_count}</span>
          </div>
        </div>
        <p className="description">{user.description}</p>
      </div>
    </div>
  );
}

ModalContent.propTypes = propTypes;

export default ModalContent;
