import { showModal, SHOW_MODAL } from '../actions';

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
