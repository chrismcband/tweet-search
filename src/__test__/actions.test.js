import { showModal, SHOW_MODAL, hideModal, HIDE_MODAL } from '../actions';

describe('showModal', () => {
  it('should create an action to show a modal', () => {
    const user = "user"
    const expectedAction = {
      type: SHOW_MODAL,
      payload: user
    }
    expect(showModal(user)).toEqual(expectedAction)
  })
})

describe('hideModal', () => {
  it('should create an action to hide a modal', () => {
    const expectedAction = {
      type: HIDE_MODAL
    }
    expect(hideModal()).toEqual(expectedAction)
  })
})
