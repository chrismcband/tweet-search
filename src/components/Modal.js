import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalContent from './ModalContent';
import './style/Modal.css';

function Modal(props) {
  const user = props.selectedUser;
  if(!props.selectedUser) {
      return <div></div>
  }
  else {
    return (
      <div>
        <div className="modal-overlay" onClick={() => props.hideModal()}>
          <ModalContent user={user}/>
        </div>
      </div>
    );
  }
}

export default Modal;
