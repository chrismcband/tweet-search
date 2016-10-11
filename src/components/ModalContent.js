import React, { PropTypes } from 'react';
import './style/ModalContent.css';

const propTypes = {
  user: PropTypes.object.isRequired,
};

function ModalContent(props) {
  return (
    <div className="modal-display">
      <span className="name">{props.user.name}</span>
      <p className="screen-name">{props.user.screen_name}</p>
    </div>
  );
}

ModalContent.propTypes = propTypes;

export default ModalContent;
