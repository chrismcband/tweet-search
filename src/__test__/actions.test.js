import { showUserModal, SHOW_USER_MODAL, hideUserModal, HIDE_USER_MODAL } from '../actions';

describe('showUserModal', () => {
  it('should create an action to show a modal', () => {
    const user = "user"
    const expectedAction = {
      type: SHOW_USER_MODAL,
      payload: user
    }
    expect(showUserModal(user)).toEqual(expectedAction)
  })
})

describe('hideUSerModal', () => {
  it('should create an action to hide a modal', () => {
    const expectedAction = {
      type: HIDE_USER_MODAL
    }
    expect(hideUserModal()).toEqual(expectedAction)
  })
})
