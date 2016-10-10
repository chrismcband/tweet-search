import * as actions from './actions';

function Modal(state=null, action) {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return action.payload

    case actions.HIDE_MODAL:
      return null
    default:
      return state
  }
}

export default Modal;
