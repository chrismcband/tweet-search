import { modal } from '../reducer_modal'

describe('modal reducer', () => {

  it('should return the initial state for other actions', () => {
    expect(modal(null, 'SET_ACTIVE_SEARCH')).toEqual(null)
  })

  it('should handle SHOW_MODAL and return user', () => {
    const user = "user"
    expect(modal(user, 'SHOW_MODAL')).toEqual(user)
  })

  it('should handle HIDE_USER', () => {
    expect(modal(null, 'HIDE_MODAL')).toEqual(null)
  })

})
