import * as actions from './actions';

export function selectedUser(state=null, action) {
  switch (action.type) {
    case actions.SHOW_USER_MODAL:
      return action.payload

    case actions.HIDE_USER_MODAL:
      return null
    default:
      return state
  }
}
