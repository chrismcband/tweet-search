import React, { PropTypes } from 'react';

const propTypes = {
  user: PropTypes.object.isRequired,
};

function ModalContent(props) {
  return (
    <div className="modal-content"></div>
  );
}

ModalContent.propTypes = propTypes;

export default ModalContent;
