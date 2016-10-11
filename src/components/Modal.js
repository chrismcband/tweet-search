import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalContent from './ModalContent';
import './style/Modal.css';

export class Modal extends Component {

  render() {
    console.log(user);
    const user = this.props.selectedUser;
    if(!this.props.selectedUser) {
      return <div></div>
    }
    else {
      console.log(user);
      return (
        <div>
          <div className="modal-overlay" onClick={() => this.props.hideModal()}>
            <ModalContent user={user}/>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  }
}

export default connect(mapStateToProps)(Modal);
